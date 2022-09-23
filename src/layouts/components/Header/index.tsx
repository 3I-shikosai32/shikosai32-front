import Image from 'next/image';
import type { FC, ComponentPropsWithoutRef } from 'react';
import { AudioControlMenuContainer } from '../AudioControlMenu';
import { HamburgerMenu } from '../HamburgerMenu';
import { PageNavigationMenu } from '../PageNavigationMenu';
import { ShareButton } from '../ShareButton';
import { UserNavigationMenuContainer } from '../UserNavigationMenu';
import twMerge from '@/libs/twmerge';

const audioControlProps = {
  name: '栄の活躍:Remix',
  composers: [
    {
      name: '酒井晴渚',
      social: 'https://example.com',
    },
  ],
  isPlaying: true,
  setIsPlaying: () => {},
};

export type HeaderProps = Omit<ComponentPropsWithoutRef<'header'>, 'children'>;

export const Header: FC<HeaderProps> = ({ className, ...props }) => (
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
        <AudioControlMenuContainer
          className="min-h-12 h-12"
          viewportClassName="left-auto right-[-3.5rem] md:right-0 justify-end"
          {...audioControlProps}
        />
        <HamburgerMenu className="min-h-12 h-12 md:hidden" />
      </div>
    </div>
    <div className="hidden md:block">
      <PageNavigationMenu className="py-1" />
    </div>
  </header>
);
