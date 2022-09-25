import type { FC } from 'react';
import useAudioControlMenu from './hooks/useAudioControlMenu';
import { AudioControlMenu, AudioControlMenuProps } from './index';

// eslint-disable-next-line import/prefer-default-export
export const AudioControlMenuContainer: FC<AudioControlMenuProps> = (props) => {
  const states = useAudioControlMenu();
  return <AudioControlMenu {...props} {...states} />;
};
