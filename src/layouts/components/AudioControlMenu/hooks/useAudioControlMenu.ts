import type { AudioControlMenuStateProps } from '../index';
import { useAudioControlValue } from '@/state/audio/audioControl';
import { useAudioResourceValue } from '@/state/audio/audioResource';

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
