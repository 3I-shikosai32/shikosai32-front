import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../../constant/recoil-key';

export type AudioAutoPlay = {
  shouldAutoPlay: boolean;
  hasAutoPlaySuceeded: boolean;
};

const AudioAutoPlayState = atom<AudioAutoPlay>({
  key: atomKeys.AUDIO_AUTOPLAY,
  default: {
    shouldAutoPlay: false,
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
