import type { FC } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { RiUser3Fill } from 'react-icons/ri';
import { TbClipboardText } from 'react-icons/tb';
import { Button, ButtonProps, ButtonIcon } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Link, LinkIcon } from '@/components/Link';
import { NavigationMenu, NavigationMenuProps, NavigationItem, NavigationTrigger, NavigationContent, NavigationLink } from '@/components/Navigation';
import twMerge from '@/libs/twmerge';

export type UserNavigationMenuProps = Pick<ButtonProps, 'className'> & Pick<NavigationMenuProps, 'viewportClassName'>;

export type UserNavigationMenuStateProps = {
  showAdminLink?: boolean;
  userIconUrl?: string | undefined;
  isLoggedIn?: boolean;
};

export const UserNavigationMenu: FC<UserNavigationMenuProps & UserNavigationMenuStateProps> = ({
  showAdminLink,
  userIconUrl,
  isLoggedIn,
  viewportClassName,
  className,
}) => {
  const shouldUseAnonymousIcon = !(userIconUrl && isLoggedIn);
  return (
    <NavigationMenu viewportClassName={twMerge('left-0 justify-start w-48', viewportClassName)}>
      <NavigationItem>
        <NavigationTrigger>
          <Button
            className={twMerge('p-0 min-h-12 bg-white', shouldUseAnonymousIcon && 'bg-gradient-to-br gradient-primary text-white', className)}
            aria-label="ユーザーメニューを開く"
            circle
          >
            {shouldUseAnonymousIcon ? (
              <ButtonIcon>
                <RiUser3Fill />
              </ButtonIcon>
            ) : (
              <Icon className="h-full" src={userIconUrl} alt="ユーザーのアイコン画像" />
            )}
          </Button>
        </NavigationTrigger>
        <NavigationContent className="w-auto gap-4  text-neutral-700">
          {isLoggedIn ? (
            <>
              <NavigationLink>
                <Link className="gap-2 font-normal" href="/profile">
                  <LinkIcon>
                    <FaUserCircle />
                  </LinkIcon>
                  プロフィール
                </Link>
              </NavigationLink>
              <NavigationLink>
                <Link className="gap-2 font-normal" href="/auth/sign-out">
                  <LinkIcon>
                    <ImExit />
                  </LinkIcon>
                  サインアウト
                </Link>
              </NavigationLink>
            </>
          ) : (
            <NavigationLink>
              <Link className="gap-2 font-normal" href="/auth/sign-up">
                <LinkIcon>
                  <RiUser3Fill />
                </LinkIcon>
                登録・ログイン
              </Link>
            </NavigationLink>
          )}
          {showAdminLink && (
            <>
              <hr className="m-0 h-px w-full bg-neutral-200" />
              <NavigationLink>
                <Link className="gap-2 font-normal" href="/admin/game">
                  <LinkIcon>
                    <TbClipboardText />
                  </LinkIcon>
                  ゲームの管理
                </Link>
              </NavigationLink>
              <NavigationLink>
                <Link className="gap-2 font-normal" href="/admin/history">
                  <LinkIcon>
                    <BiTimeFive />
                  </LinkIcon>
                  景品交換履歴
                </Link>
              </NavigationLink>
            </>
          )}
        </NavigationContent>
      </NavigationItem>
    </NavigationMenu>
  );
};

UserNavigationMenu.defaultProps = {
  showAdminLink: false,
  userIconUrl: undefined,
  isLoggedIn: false,
};
