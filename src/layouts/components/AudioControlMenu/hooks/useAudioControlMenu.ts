import type { AudioControlMenuContainerStateProps } from '../container';
import { useAudioControlValue } from '@/state/audio/audioControl';
import { useAudioRefReadOnly } from '@/state/audio/audioRefReadOnly';
import { useAudioResourceValue } from '@/state/audio/audioResource';

export const useAudioControlMenu = (): AudioControlMenuContainerStateProps => {
  const audioResource = useAudioResourceValue();
  const name = audioResource?.name || '曲が選ばれていません';
  const composers = audioResource?.composers || [];
  const { isPlaying, duration, currentTime } = useAudioControlValue();

  const audio = useAudioRefReadOnly();
  //
  // TypeError: Failed to execute 'play' on 'HTMLMediaElement': Illegal invocation
  // `HTMLMediaElement`付属のメソッドは`this`がその`HTMLMediaElement`でないとエラーになるから、レキシカルスコープを使って束縛する
  // (無名関数で囲む)
  //
  const onPlay = () => audio?.play() || (() => {});
  const onPause = () => audio?.pause() || (() => {});

  return {
    name,
    composers,
    isPlaying,
    duration,
    currentTime,
    onPlay,
    onPause,
  };
};
