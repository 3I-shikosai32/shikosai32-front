import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import { TransactionItem, TransactionItemProps } from '@/components/TransactionItem';
import type { GiftTransaction } from '@/entity/Transaction';

export type GiftTransactionItemData = GiftTransaction;

export type GiftTransactionItemProps = Omit<TransactionItemProps, 'children'> & GiftTransactionItemData;
export const GiftTransactionItem: FC<GiftTransactionItemProps> = ({ exchangedItem, ...props }) => (
  <TransactionItem {...{ exchangedItem, ...props }}>
    <IoMdSwap className="text-lg text-neutral-500" />
    {exchangedItem.name}
  </TransactionItem>
);
