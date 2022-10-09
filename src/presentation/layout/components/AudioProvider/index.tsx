import type { FC, ReactEventHandler, ReactNode } from 'react';
import { useRef, useState, useCallback, useEffect } from 'react';
import { useAudioAutoPlayStateValue, useSetAudioAutoPlayState } from '@/state/audio/audioAutoPlay';
import { useSetAudioControl } from '@/state/audio/audioControl';
import type { AudioRef } from '@/state/audio/audioRefReadOnly';
import { AudioRefReadOnlyContext } from '@/state/audio/audioRefReadOnly';

import type { AudioResource } from '@/state/audio/audioResource';

export type AudioProviderProps = {
  audioResource?: AudioResource;
  children: ReactNode;
};

export const AudioProvider: FC<AudioProviderProps> = ({ audioResource, children }) => {
  const [audioRefState, setAudioRefState] = useState<AudioRef | null>(null);
  const audioRef = useRef<AudioRef>(null);

  // `Context`で公開する`audioRef`の値を更新する
  useEffect(() => {
    setAudioRefState(audioRef.current);
  }, [audioRef, setAudioRefState, audioResource]);

  // React側で管理されていない(`uncontrolled`)な内部の`<audio>`タグの状態をRecoilのAtom`AudioControl`の状態に反映する`InnerStatePropagator`を定義する
  const setAudioControlValue = useSetAudioControl();
  const onPlayInnerStatePropagator = useCallback(() => {
    setAudioControlValue((prev) => ({
      ...prev,
      isPlaying: true,
    }));
  }, [setAudioControlValue]);
  const onPauseInnerStatePropagator = useCallback(() => {
    setAudioControlValue((prev) => ({
      ...prev,
      isPlaying: false,
    }));
  }, [setAudioControlValue]);
  const onDurationChangeInnerStatePropagator = useCallback<ReactEventHandler<HTMLAudioElement>>(
    (event) => {
      if (event.target === null) return;
      if (!(event.target instanceof HTMLAudioElement)) return;
      const { duration } = event.target;
      setAudioControlValue((prev) => ({
        ...prev,
        duration,
      }));
    },
    [setAudioControlValue],
  );
  //
  // このイベントの発火頻度は、パフォーマンスに影響を与えない程度に自動調整される e.g. 4Hz ~ 66Hz
  // 参照: https://developer.mozilla.org/ja/docs/Web/API/HTMLMediaElement/timeupdate_event
  //
  const onTimeUpdateInnerStatePropagator = useCallback<ReactEventHandler<HTMLAudioElement>>(
    (event) => {
      if (event.target === null) return;
      if (!(event.target instanceof HTMLAudioElement)) return;
      const { currentTime } = event.target;
      setAudioControlValue((prev) => ({
        ...prev,
        currentTime,
      }));
    },
    [setAudioControlValue],
  );
  const onVolumeChangeInnerStatePropagator = useCallback<ReactEventHandler<HTMLAudioElement>>(
    (event) => {
      if (event.target === null) return;
      if (!(event.target instanceof HTMLAudioElement)) return;
      const { volume } = event.target;
      setAudioControlValue((prev) => ({
        ...prev,
        volume,
      }));
    },
    [setAudioControlValue],
  );

  const { shouldAutoPlay, hasAutoPlaySuceeded } = useAudioAutoPlayStateValue();
  const setAudioAutoPlayState = useSetAudioAutoPlayState();

  // マウントされて100ms後に再生されていなかったら、自動再生失敗フラグを立てる
  useEffect(() => {
    setTimeout(() => {
      setAudioAutoPlayState((prev) => ({
        ...prev,
        hasAutoPlaySuceeded: audioRef.current?.paused === false,
      }));
    }, 100);
  }, [audioResource, audioRef, setAudioAutoPlayState]);

  // 自動再生に失敗していたら、ページにユーザーがクリックしたときに自動再生の条件と同じ条件で再生を試みるイベントハンドラを設定する
  const pseudoAutoPlayAudio = useCallback(() => {
    if (!shouldAutoPlay) return;
    if (audioRef.current === null) return;
    audioRef.current.play();
  }, [shouldAutoPlay, audioRef]);

  const onDocumentInteractEventListener = useCallback(() => {
    pseudoAutoPlayAudio();
    window.document.removeEventListener('click', onDocumentInteractEventListener);
  }, [pseudoAutoPlayAudio]);

  useEffect(() => {
    if (hasAutoPlaySuceeded) return;
    if (!(window && window.document)) return;
    window.document.addEventListener('click', onDocumentInteractEventListener);
  }, [onDocumentInteractEventListener, pseudoAutoPlayAudio, hasAutoPlaySuceeded]);

  return (
    <AudioRefReadOnlyContext.Provider value={audioRefState}>
      {/* TODO: 曲に対応する適切なWebVTTキャプションファイルを、余裕がある時に作成して追加する */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        autoPlay={!!audioResource && shouldAutoPlay}
        preload="auto"
        loop
        ref={audioRef}
        src={audioResource?.src}
        key={audioResource?.src}
        onPlay={onPlayInnerStatePropagator}
        onPause={onPauseInnerStatePropagator}
        onDurationChange={onDurationChangeInnerStatePropagator}
        onTimeUpdate={onTimeUpdateInnerStatePropagator}
        onVolumeChange={onVolumeChangeInnerStatePropagator}
      />
      {children}
    </AudioRefReadOnlyContext.Provider>
  );
};
AudioProvider.defaultProps = {
  audioResource: undefined,
};
