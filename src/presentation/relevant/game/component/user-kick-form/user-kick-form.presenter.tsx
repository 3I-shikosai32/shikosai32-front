import type { FC } from 'react';
import type { KickableUserInteractiveItemProps } from '../kickable-user-interactive-item/kickable-user-interactive-item.presenter';
import { KickableUserInteractiveItem } from '../kickable-user-interactive-item/kickable-user-interactive-item.presenter';
import type { UserBio } from '@/model/user/user-bio.model';
import { Card, CardProps } from '@/presentation/primitive/component/card/card.presenter';
import twMerge from '@/presentation/style/twmerge';

export type UserKickFormProps = Omit<CardProps, 'children'> & {
  users: Array<UserBio>;
  onKick: KickableUserInteractiveItemProps['onKick'];
};

export const UserKickForm: FC<UserKickFormProps> = ({ users, onKick, className, ...props }) => (
  <Card className={twMerge('items-stretch', className)} {...props}>
    <div className="flex flex-col items-start justify-start gap-4 p-2">
      <h2 className="font-branding text-4xl font-bold">参加中のプレイヤー</h2>
      <span>{`現在 ${users.length}名 のプレイヤーが参加中です。`}</span>
    </div>
    <li className="flex flex-col items-stretch justify-start gap-2">
      {users.map((user) => (
        <KickableUserInteractiveItem key={user.id} {...user} onKick={onKick} />
      ))}
    </li>
  </Card>
);
