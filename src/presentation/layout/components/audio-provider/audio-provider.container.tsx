import type { FC } from 'react';
import type { AudioProviderProps } from './audio-provider.component';
import { AudioProvider } from './audio-provider.component';
import { useAudioResourceValue, useAutoSetAudioResource } from '@/state/audio/audio-resource';

export type AudioProviderContainerProps = Omit<AudioProviderProps, 'audioResource'>;

export const AudioProviderContainer: FC<AudioProviderContainerProps> = (props) => {
  const audioResource = useAudioResourceValue();

  // ルーターのパスに合わせてAudioResourceの値を自動設定する
  useAutoSetAudioResource();
  return <AudioProvider audioResource={audioResource} {...props} />;
};
