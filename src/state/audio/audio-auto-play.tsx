import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoil-key';

export type AudioAutoPlay = {
  shouldAutoPlay: boolean;
  hasAutoPlaySuceeded: boolean;
};

const AudioAutoPlayState = atom<AudioAutoPlay>({
  key: atomKeys.AUDIO_AUTOPLAY,
  default: {
    shouldAutoPlay: true,
    hasAutoPlaySuceeded: false,
  },
});

export const useAudioAutoPlayStateValue = () => {
  const audioControl = useRecoilValue(AudioAutoPlayState);
  return audioControl;
};

export const useSetAudioAutoPlayState = () => {
  const setAudioControl = useSetRecoilState(AudioAutoPlayState);
  return setAudioControl;
};
