import type { FC } from 'react';
import { di } from 'react-magnetic-di';
import { useUserNavigationMenu } from './hook/use-user-navigation-menu.hook';
import { UserNavigationMenu } from './user-navigation-menu.component';
import type { UserNavigationMenuProps } from './user-navigation-menu.component';

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
