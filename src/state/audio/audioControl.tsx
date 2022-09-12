import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoilKeys';

export type AudioControl = {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setIsMuted: (isMuted: boolean) => void;
};

const AudioControlState = atom<AudioControl>({
  key: atomKeys.AUDIO_CONTROL,
  default: {
    isPlaying: false,
    volume: 0,
    isMuted: false,
    setIsPlaying: () => {},
    setVolume: () => {},
    setIsMuted: () => {},
  },
});

export const useAudioControlValue = () => {
  const audioControl = useRecoilValue(AudioControlState);
  return audioControl;
};

export const useSetAudioControl = () => {
  const setAudioControl = useSetRecoilState(AudioControlState);
  return setAudioControl;
};
