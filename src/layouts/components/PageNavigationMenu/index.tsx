import Image from 'next/image';
import type { FC } from 'react';
import { Link } from '@/components/Link';
import { NavigationMenu, NavigationItem, NavigationLink } from '@/components/Navigation';
import type { NavigationMenuProps } from '@/components/Navigation';
import twMerge from '@/libs/twmerge';

export type PageNavigationMenuProps = Pick<NavigationMenuProps, 'className'>;

export const PageNavigationMenu: FC<PageNavigationMenuProps> = ({ className, ...props }) => (
  <NavigationMenu className={twMerge('p-0 grid grid-cols-5 grid-rows-1 justify-center gap-4 items-center', className)} {...props}>
    <NavigationItem>
      <NavigationLink>
        <Link className="hidden text-center text-neutral-700 drop-shadow-none md:block" href="https://example.com">
          ランキング
        </Link>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem>
      <NavigationLink>
        <Link className="hidden text-center text-neutral-700 drop-shadow-none md:block" href="https://example.com">
          ゲーム一覧
        </Link>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem className="md:px-4">
      <NavigationLink>
        <figure className="relative flex h-full w-14 flex-none items-center justify-center">
          <Image src="/logos/header.png" width={324} height={284} alt="OZ at 3Iのロゴ画像" />
        </figure>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem>
      <NavigationLink>
        <Link className="hidden text-center text-neutral-700 drop-shadow-none md:block" href="https://example.com">
          景品交換
        </Link>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem>
      <NavigationLink>
        <Link className="hidden text-center text-neutral-700 drop-shadow-none md:block" href="https://example.com">
          スタッフ
        </Link>
      </NavigationLink>
    </NavigationItem>
  </NavigationMenu>
);
