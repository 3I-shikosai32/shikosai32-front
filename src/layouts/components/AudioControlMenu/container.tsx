import type { FC } from 'react';
import { di } from 'react-magnetic-di';

import { useAudioControlMenu } from './hooks/useAudioControlMenu';
import type { AudioControlMenuProps } from './index';
import { AudioControlMenu } from './index';

export type AudioControlMenuContainerStateProps = Pick<
  AudioControlMenuProps,
  'name' | 'composers' | 'isPlaying' | 'onPlay' | 'onPause' | 'duration' | 'currentTime'
>;
export type AudioControlMenuContainerProps = Omit<AudioControlMenuProps, keyof AudioControlMenuContainerStateProps>;

export const AudioControlMenuContainer: FC<AudioControlMenuContainerProps> = (props) => {
  //
  // `useAudioControlMenu`を注入可能にする。
  // `production`環境ではDI関連の当該コードは`react-magnetic-di/babel-plugin`により削除される。
  // 参照: https://www.npmjs.com/package/react-magnetic-di
  //
  di(useAudioControlMenu);
  const states = useAudioControlMenu();
  return <AudioControlMenu {...props} {...states} />;
};
