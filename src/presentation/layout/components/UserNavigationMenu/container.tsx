import type { FC } from 'react';
import { di } from 'react-magnetic-di';
import { useUserNavigationMenu } from './hooks/useUserNavigationMenu';
import { UserNavigationMenu } from '.';
import type { UserNavigationMenuProps } from '.';

export const UserNavigationMenuContainer: FC<UserNavigationMenuProps> = (props) => {
  //
  // `useUserNavigationMenu`を注入可能にする。
  // `production`環境ではDI関連の当該コードは`react-magnetic-di/babel-plugin`により削除される。
  // 参照: https://www.npmjs.com/package/react-magnetic-di
  //
  di(useUserNavigationMenu);

  const states = useUserNavigationMenu();
  return <UserNavigationMenu {...props} {...states} />;
};
