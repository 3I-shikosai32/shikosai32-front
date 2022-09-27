import Image from 'next/image';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { di } from 'react-magnetic-di';
import { AudioControlMenuContainer } from '../AudioControlMenu/container';
import { HamburgerMenu } from '../HamburgerMenu';
import { PageNavigationMenu } from '../PageNavigationMenu';
import { ShareButton } from '../ShareButton';
import { UserNavigationMenuContainer } from '../UserNavigationMenu/container';
import twMerge from '@/libs/twmerge';

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  //
  // `UserNavigationMenuContainer, AudioControlMenuContainer`を注入可能にする。
  // `production`環境ではDI関連の当該コードは`react-magnetic-di/babel-plugin`により削除される。
  // 参照: https://www.npmjs.com/package/react-magnetic-di
  //
  di(UserNavigationMenuContainer, AudioControlMenuContainer);

  return (
    <header className={twMerge('bg-white w-full flex flex-col justify-center items-center p-0', className)} {...props}>
      <div className="flex w-full flex-row items-center justify-center p-2">
        <div className="flex flex-1 flex-row items-center justify-start p-0">
          <UserNavigationMenuContainer className="min-h-12 h-12" />
          <ShareButton className="min-h-12 ml-1 h-12" />
        </div>
        <figure className="relative flex h-full w-14 flex-none items-center justify-center">
          <Image src="/logos/header.png" width={324} height={284} alt="OZ at 3Iのロゴ画像" />
        </figure>
        <div className="flex flex-1 flex-row items-center justify-end p-0">
          <AudioControlMenuContainer className="min-h-12 h-12" viewportClassName="left-auto right-[-3.5rem] md:right-0 justify-end" />
          <HamburgerMenu className="min-h-12 h-12 md:hidden" />
        </div>
      </div>
      <div className="hidden md:block">
        <PageNavigationMenu className="py-1" />
      </div>
    </header>
  );
};
