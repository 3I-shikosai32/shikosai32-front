import type { FC, ComponentPropsWithoutRef } from 'react';
import { AudioControlMenuContainer } from '../AudioControlMenu/container';
import { HamburgerMenu } from '../HamburgerMenu';
import { PageNavigationMenu } from '../PageNavigationMenu';
import { ShareButton } from '../ShareButton';
import { UserNavigationMenuContainer } from '../UserNavigationMenu/container';
import twMerge from '@/libs/twmerge';

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => (
  <header className={twMerge('bg-white w-full grid grid-cols-1 grid-rows-1 p-2', className)} {...props}>
    <div className="col-span-full row-span-full m-0 flex flex-row items-center justify-center p-0">
      <PageNavigationMenu />
    </div>
    <div className="relative z-10 col-span-full row-span-full m-0 flex flex-row items-center justify-between p-0 md:flex-row-reverse md:justify-start">
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
