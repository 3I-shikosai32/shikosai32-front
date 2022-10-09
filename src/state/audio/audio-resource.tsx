import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../recoil-key';
import { useAudioResourceAutoSetPermissionValue } from './audio-resource-auto-set-permission';

import type { AudioResource } from '@/model/audio/audio-resource.model';

// NOTE: 配列の番号が小さいほうがより優先される実装にする
export const audioResources: Array<AudioResource> = [
  {
    name: '栄の活躍:Games',
    composers: [
      {
        name: '酒井晴渚',
      },
    ],
    src: '/audio/sakae-remix.mp3',
    target: /^\/games\/[\w-/]*$/,
  },
  {
    name: '栄の活躍:Remix',
    composers: [
      {
        name: '酒井晴渚',
      },
    ],
    src: '/audio/sakae-remix.mp3',
    target: /^\/[\w-/]*$/,
  },
];

// `const router = useRouter()` で取得できる、パスの文字列`router.pathname` の値を受け取る。
// テストがしやすいように、利用可能な曲は外部から受け取れるようにしている。
export const resolveAudioResource = (pathname: string, targetAudioResources: Array<AudioResource> = audioResources): AudioResource | undefined =>
  targetAudioResources.find((resource) => resource.target.test(pathname));

const audioResourceState = atom<AudioResource | undefined>({
  key: atomKeys.AUDIO_RESOURCE,
  default: undefined,
});

export const useAudioResourceValue = () => {
  const audioResource = useRecoilValue(audioResourceState);
  return audioResource;
};

export const useSetAudioResource = () => {
  const setAudioResource = useSetRecoilState(audioResourceState);
  return setAudioResource;
};

export const useAutoSetAudioResource = () => {
  const router = useRouter();
  const setAudioResource = useSetRecoilState(audioResourceState);
  const { isAutoSetPermitted } = useAudioResourceAutoSetPermissionValue();

  useEffect(() => {
    if (isAutoSetPermitted) {
      const audioResource = resolveAudioResource(router.pathname);
      if (audioResource) {
        setAudioResource(audioResource);
      }
    }
  }, [router.pathname, setAudioResource, isAutoSetPermitted]);
};
