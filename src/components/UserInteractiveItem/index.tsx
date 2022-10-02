import type { FC, ComponentPropsWithoutRef, ReactElement } from 'react';
import type { UserItemProps } from '@/components/UserItem';
import twMerge from '@/libs/twmerge';

export type UserInteractiveItemActionGroupProps = ComponentPropsWithoutRef<'div'>;
export const UserInteractiveItemActionGroup: FC<UserInteractiveItemActionGroupProps> = ({ children, className, ...props }) => (
  <div className={twMerge('flex flex-row flex-nowrap justify-end items-center gap-2', className)} {...props}>
    {children}
  </div>
);

export type UserInteractiveItemProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children: Array<ReactElement<UserItemProps> | ReactElement<UserInteractiveItemActionGroupProps>>;
};
export const UserInteractiveItem: FC<UserInteractiveItemProps> = ({ children, className, ...props }) => (
  <div className={twMerge('flex flex-row flex-wrap justify-start items-center gap-6 p-0', className)} {...props}>
    {children}
  </div>
);
