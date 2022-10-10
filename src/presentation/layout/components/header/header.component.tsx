import type { FC, ComponentPropsWithoutRef } from 'react';
import { AudioControlMenuContainer } from '../audio-control-menu/audio-control-menu.container';
import { HamburgerMenu } from '../hamburger-menu/hamburger-menu.component';
import { PageNavigationMenu } from '../page-navigation-menu/page-navigation-menu.component';
import { ShareButton } from '../share-button/share-button.component';
import { UserNavigationMenuContainer } from '../user-navigation-menu/user-navigation-menu.container';
import twMerge from '@/presentation/style/twmerge';

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => (
  <header className={twMerge('bg-white w-full grid grid-cols-1 grid-rows-1 p-2', className)} {...props}>
    <div className="col-span-full row-span-full m-0 flex flex-row items-center justify-center p-0">
      <PageNavigationMenu />
    </div>
    <div className="col-span-full row-span-full m-0 flex flex-row items-center justify-between p-0 md:flex-row-reverse md:justify-start">
      <div className="flex flex-row items-center justify-start gap-1 p-0 md:flex-row-reverse">
        <UserNavigationMenuContainer className="min-h-12 h-12" viewportClassName="md:left-auto md:right-0 md:justify-end" />
        <ShareButton className="min-h-12 h-12 grow-0" />
      </div>
      <div className="flex flex-row items-center justify-end p-0">
        <AudioControlMenuContainer className="min-h-12 h-12" viewportClassName="left-auto right-[-3.5rem] md:right-0 justify-end" />
        <HamburgerMenu className="min-h-12 h-12 md:hidden" />
      </div>
    </div>
  </header>
);
