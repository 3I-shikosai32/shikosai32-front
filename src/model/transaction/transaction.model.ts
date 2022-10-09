import type { Id } from '../id.model';
import type { UserBio } from '../user/user-bio.model';

export type Transaction<T> = {
  createdAt: Date;
  deliveredAt?: Date;
  receiver: UserBio;
  exchangedItem: T;
  id: Id;
  isDelivered: boolean;
};
