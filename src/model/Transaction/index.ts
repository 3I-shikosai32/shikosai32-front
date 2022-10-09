import type { Id } from '..';
import type { Badge } from '../Badge';
import type { Gift } from '../Gift';
import type { UserBio } from '../User';

export type Transaction<T> = {
  createdAt: Date;
  deliveredAt?: Date;
  receiver: UserBio;
  exchangedItem: T;
  id: Id;
  isDelivered: boolean;
};
export type GiftTransaction = Transaction<Pick<Gift, 'name'>>;
export type BadgeTransaction = Transaction<Badge>;
