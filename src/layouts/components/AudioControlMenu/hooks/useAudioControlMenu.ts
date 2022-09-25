import type { AudioControlMenuStateProps } from '../index';
import { useAudioControlValue } from '@/state/audio/audioControl';
import { useAudioResourceValue } from '@/state/audio/audioResource';

// eslint-disable-next-line import/prefer-default-export
export const useAudioControlMenu = (): AudioControlMenuStateProps => {
  const audioResource = useAudioResourceValue();
  const name = audioResource?.name || '曲が選ばれていません';
  const composers = audioResource?.composers || [];
  const { isPlaying, setIsPlaying } = useAudioControlValue();
  return {
    name,
    composers,
    isPlaying,
    setIsPlaying,
  };
};
