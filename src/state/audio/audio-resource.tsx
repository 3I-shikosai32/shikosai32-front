import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { atomKeys } from '../../constant/recoil-key';
import { useAudioResourceAutoSetPermissionValue } from './audio-resource-auto-set-permission';

// 曲の作曲者を表す型
export type Composer = {
  name: string;
  social?: string; // SNS等のリンク
};

// 曲の情報を表す型
export type AudioResource = {
  name: string; // 曲の名前
  composers: Array<Composer>; // 作曲者名
  src: string; // 曲の音声ファイルのURL
  target: RegExp; // 曲が流れるページのパスの正規表現
};

// NOTE: 配列の番号が小さいほうがより優先される実装にする
export const audioResources: Array<AudioResource> = [
  {
    name: '栄の活躍:Remix',
    composers: [
      {
        name: 'AEINZ',
        social: 'https://soundcloud.com/aeinzmusic',
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
  const audioResourceAutoSetPermission = useAudioResourceAutoSetPermissionValue();

  useEffect(() => {
    if (audioResourceAutoSetPermission) {
      const audioResource = resolveAudioResource(router.pathname);
      if (audioResource) {
        setAudioResource(audioResource);
      }
    }
  }, [router.pathname, setAudioResource, audioResourceAutoSetPermission]);
};
