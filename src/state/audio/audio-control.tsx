import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoil-key';

import type { AudioControl } from '@/model/audio/audio-control.model';

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
