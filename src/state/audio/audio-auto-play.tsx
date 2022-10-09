import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoil-key';

import type { AudioAutoPlayStatus } from '@/model/audio/audio-auto-play-status.model';

const AudioAutoPlayState = atom<AudioAutoPlayStatus>({
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
