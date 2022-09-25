import type { FC } from 'react';
import { useUserNavigationMenu } from './hooks/useUserNavigationMenu';
import { UserNavigationMenu } from '.';
import type { UserNavigationMenuProps } from '.';

// ChromaticのCIでdefault exportが正しく動作しない可能性がある(要検証)
// eslint-disable-next-line import/prefer-default-export
export const UserNavigationMenuContainer: FC<UserNavigationMenuProps> = (props) => {
  const states = useUserNavigationMenu();
  return <UserNavigationMenu {...props} {...states} />;
};
