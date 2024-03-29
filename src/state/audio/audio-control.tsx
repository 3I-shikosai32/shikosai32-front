import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../../constant/recoil-key';

export type AudioControl = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
};

const AudioControlState = atom<AudioControl>({
  key: atomKeys.AUDIO_CONTROL,
  default: {
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0,
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
