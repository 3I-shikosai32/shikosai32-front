import type { FC } from 'react';
import { di } from 'react-magnetic-di';

import { useAudioControlMenu } from './hooks/useAudioControlMenu';
import type { AudioControlMenuProps } from './index';
import { AudioControlMenu } from './index';

export const AudioControlMenuContainer: FC<AudioControlMenuProps> = (props) => {
  //
  // `useAudioControlMenu`を注入可能にする。
  // `production`環境ではDI関連の当該コードは`react-magnetic-di/babel-plugin`により削除される。
  // 参照: https://www.npmjs.com/package/react-magnetic-di
  //
  di(useAudioControlMenu);
  const states = useAudioControlMenu();
  return <AudioControlMenu {...props} {...states} />;
};
