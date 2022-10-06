import Image from 'next/image';
import type { FC } from 'react';
import { Link } from '@/components/Link';
import { NavigationMenu, NavigationItem, NavigationLink } from '@/components/Navigation';
import type { NavigationMenuProps } from '@/components/Navigation';
import twMerge from '@/libs/twmerge';

export type PageNavigationMenuProps = Pick<NavigationMenuProps, 'className'>;

export const PageNavigationMenu: FC<PageNavigationMenuProps> = ({ className, ...props }) => (
  <NavigationMenu className={twMerge('p-0 flex flex-row justify-center gap-4 items-center', className)} {...props}>
    <NavigationItem className="hidden shrink-0 grow basis-24 items-center justify-center whitespace-nowrap md:flex">
      <NavigationLink>
        <Link className="text-center text-neutral-700 drop-shadow-none" href="https://example.com">
          ランキング
        </Link>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem className="hidden shrink-0 grow basis-24 items-center justify-center whitespace-nowrap md:flex">
      <NavigationLink>
        <Link className="text-center text-neutral-700 drop-shadow-none" href="https://example.com">
          ゲーム一覧
        </Link>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem className="flex flex-1 items-center justify-center md:px-4">
      <NavigationLink>
        <Link className="relative flex h-full w-14 flex-none items-center justify-center drop-shadow-none" href="https://example.com">
          <Image src="/logos/header.png" width={324} height={284} alt="OZ at 3Iのロゴ画像" />
        </Link>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem className="hidden shrink-0 grow basis-24 items-center justify-center whitespace-nowrap md:flex">
      <NavigationLink>
        <Link className="text-center text-neutral-700 drop-shadow-none" href="https://example.com">
          景品交換
        </Link>
      </NavigationLink>
    </NavigationItem>
    <NavigationItem className="hidden shrink-0 grow basis-24 items-center justify-center whitespace-nowrap md:flex">
      <NavigationLink>
        <Link className="text-center text-neutral-700 drop-shadow-none" href="https://example.com">
          スタッフ
        </Link>
      </NavigationLink>
    </NavigationItem>
  </NavigationMenu>
);
