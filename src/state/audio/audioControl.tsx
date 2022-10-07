import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoilKeys';

export type AudioControl = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  hasAutoPlaySuceeded: boolean;
};

const AudioControlState = atom<AudioControl>({
  key: atomKeys.AUDIO_CONTROL,
  default: {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0,
    hasAutoPlaySuceeded: false,
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
