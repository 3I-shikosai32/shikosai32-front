import type { Gift } from '../gift/gift.model';
import type { Transaction } from './transaction.model';

export type GiftTransaction = Transaction<Pick<Gift, 'name'>>;
