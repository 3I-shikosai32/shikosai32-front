import type { FC, ReactElement } from 'react';
import type { PointInputProps } from '../PointInput';
import { UserInteractiveItem, UserInteractiveItemActionGroup } from '@/components/UserInteractiveItem';
import { UserItem, UserItemIcon, UserItemBio, UserItemName } from '@/components/UserItem';
import type { UserItemProps, UserItemData } from '@/components/UserItem';
import twMerge from '@/utils/twmerge';

export type PointInputUserInteractiveItemProps = Omit<UserItemProps, 'children'> &
  UserItemData & {
    children: ReactElement<PointInputProps>;
  };
export const PointInputUserInteractiveItem: FC<PointInputUserInteractiveItemProps> = ({ children, id, name, iconUrl, className, ...props }) => (
  <UserInteractiveItem key={id} className={twMerge('p-2', className)} {...props}>
    <UserItem>
      <UserItemIcon iconUrl={iconUrl} name={name} />
      <UserItemBio>
        <UserItemName>{name}</UserItemName>
      </UserItemBio>
    </UserItem>
    <UserInteractiveItemActionGroup>{children}</UserInteractiveItemActionGroup>
  </UserInteractiveItem>
);
