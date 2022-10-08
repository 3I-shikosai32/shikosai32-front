import type { Id } from '..';
import type { Badge } from '../Badge';
import type { Gift } from '../Gift';
import type { User } from '../User';

export type Transaction<T> = {
  createdAt: Date;
  deliveredAt?: Date;
  receiver: User;
  exchangedItem: T;
  id: Id;
  isDelivered: boolean;
};
export type GiftTransaction = Transaction<Gift>;
export type BadgeTransaction = Transaction<Badge>;
