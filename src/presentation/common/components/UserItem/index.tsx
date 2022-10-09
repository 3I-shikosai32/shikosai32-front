import type { FC, ComponentPropsWithoutRef, ReactElement } from 'react';
import type { UserBio } from '@/model/User';
import { Icon } from '@/presentation/common/components/Icon';
import { Separator } from '@/presentation/common/components/Separator';
import twMerge from '@/presentation/common/twmerge';

export type UserItemData = UserBio;

export type UserItemIconProps = Pick<UserItemData, 'name' | 'iconUrl'>;
export const UserItemIcon: FC<UserItemIconProps> = ({ name, iconUrl }) => <Icon src={iconUrl} alt={`ユーザー"${name}"のアイコン画像`} />;

export type UserItemNameProps = ComponentPropsWithoutRef<'span'>;
export const UserItemName: FC<UserItemNameProps> = ({ children, className, ...props }) => (
  <span className={twMerge('font-bold', className)} {...props}>
    {children}
  </span>
);

export type UserItemDescriptionProps = ComponentPropsWithoutRef<'span'>;
export const UserItemDescription: FC<UserItemDescriptionProps> = ({ children, className, ...props }) => (
  <span className={twMerge('text-neutral-500', className)} {...props}>
    {children}
  </span>
);

export type UserItemBioProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children: Array<ReactElement<UserItemNameProps> | ReactElement<UserItemDescriptionProps>> | ReactElement<UserItemNameProps>;
};
export const UserItemBio: FC<UserItemBioProps> = ({ className, children, ...props }) => (
  <div className={twMerge('flex flex-col flex-grow gap-0', className)} {...props}>
    {children}
  </div>
);

export type UserItemTipsProps = ComponentPropsWithoutRef<'div'>;
export const UserItemTips: FC<UserItemTipsProps> = ({ children, className, ...props }) => (
  <>
    <Separator orientation="vertical" />
    <div className={twMerge('flex flex-grow-0 relative items-center justify-end flex-row gap-2', className)} {...props}>
      {children}
    </div>
  </>
);

export type UserItemProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children: Array<ReactElement<UserItemIconProps> | ReactElement<UserItemBioProps> | ReactElement<UserItemTipsProps>>;
};
export const UserItem: FC<UserItemProps> = ({ children, className, ...props }) => (
  <div className={twMerge('flex flex-grow flex-row flex-nowrap justify-start items-center gap-3 p-0', className)} {...props}>
    {children}
  </div>
);
