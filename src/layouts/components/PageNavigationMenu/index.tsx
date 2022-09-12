import type { FC } from 'react';
import { Link } from '@/components/Link';
import { NavigationMenu, NavigationItem, NavigationLink } from '@/components/Navigation';
import type { NavigationMenuProps } from '@/components/Navigation';
import twMerge from '@/libs/twmerge';

export type PageNavigationMenuProps = Pick<NavigationMenuProps, 'className'>;

export const PageNavigationMenu: FC<PageNavigationMenuProps> = ({ className, ...props }) => (
  <NavigationMenu className={twMerge('flex p-2 justify-center gap-6 items-center', className)} {...props}>
    <NavigationItem>
      <div>
        <NavigationLink>
          <Link className="text-neutral-700 drop-shadow-none" href="https://example.com">
            ランキング
          </Link>
        </NavigationLink>
      </div>
    </NavigationItem>
    <NavigationItem>
      <div>
        <NavigationLink>
          <Link className="text-neutral-700 drop-shadow-none" href="https://example.com">
            ゲーム一覧
          </Link>
        </NavigationLink>
      </div>
    </NavigationItem>
    <NavigationItem>
      <div>
        <NavigationLink>
          <Link className="text-neutral-700 drop-shadow-none" href="https://example.com">
            景品交換
          </Link>
        </NavigationLink>
      </div>
    </NavigationItem>
    <NavigationItem>
      <div>
        <NavigationLink>
          <Link className="text-neutral-700 drop-shadow-none" href="https://example.com">
            スタッフ
          </Link>
        </NavigationLink>
      </div>
    </NavigationItem>
  </NavigationMenu>
);
