import type { FC } from 'react';
import useUserNavigationMenu from './hooks/useUserNavigationMenu';
import { UserNavigationMenu } from '.';
import type { UserNavigationMenuProps } from '.';

const UserNavigationMenuContainer: FC<UserNavigationMenuProps> = (props) => {
  const states = useUserNavigationMenu();
  return <UserNavigationMenu {...props} {...states} />;
};

export default UserNavigationMenuContainer;
