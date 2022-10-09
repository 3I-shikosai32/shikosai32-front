import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoil-key';

import type { AudioResourceAutoSetPermissionStatus } from '@/model/audio/audio-resource-auto-set-permission-status.model';

const audioResourceAutoSetPermissionState = atom<AudioResourceAutoSetPermissionStatus>({
  key: atomKeys.AUDIO_RESOURCE_AUTO_SET_PERMISSION,
  default: {
    isAutoSetPermitted: true,
  },
});

export const useAudioResourceAutoSetPermissionValue = () => {
  const audioResourceAutoSetPermission = useRecoilValue(audioResourceAutoSetPermissionState);
  return audioResourceAutoSetPermission;
};

export const useSetAudioResourceAutoSetPermission = () => {
  const setAudioResourceAutoSetPermission = useSetRecoilState(audioResourceAutoSetPermissionState);
  return setAudioResourceAutoSetPermission;
};
