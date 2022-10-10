import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoil-key';

export type AudioResourceAutoSetPermission = boolean;

const audioResourceAutoSetPermissionState = atom<AudioResourceAutoSetPermission>({
  key: atomKeys.AUDIO_RESOURCE_AUTO_SET_PERMISSION,
  default: true,
});

export const useAudioResourceAutoSetPermissionValue = () => {
  const audioResourceAutoSetPermission = useRecoilValue(audioResourceAutoSetPermissionState);
  return audioResourceAutoSetPermission;
};

export const useSetAudioResourceAutoSetPermission = () => {
  const setAudioResourceAutoSetPermission = useSetRecoilState(audioResourceAutoSetPermissionState);
  return setAudioResourceAutoSetPermission;
};
