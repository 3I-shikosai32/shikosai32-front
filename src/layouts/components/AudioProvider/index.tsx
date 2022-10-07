import type { FC, ReactEventHandler, ReactNode } from 'react';
import { useRef, useState, useCallback, useEffect } from 'react';
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
      const { duration } = event.target;
      setAudioControlValue((prev) => ({
        ...prev,
        duration,
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

  return (
    <AudioRefReadOnlyContext.Provider value={audioRefState}>
      {/* TODO: 曲に対応する適切なWebVTTキャプションファイルを、余裕がある時に作成して追加する */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        autoPlay={!!audioResource}
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
