import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import type { GiftTransaction } from '@/model/transaction';
import { TransactionItem, TransactionItemProps } from '@/presentation/common/components/TransactionItem';

export type GiftTransactionItemData = GiftTransaction;

export type GiftTransactionItemProps = Omit<TransactionItemProps, 'children'> & GiftTransactionItemData;
export const GiftTransactionItem: FC<GiftTransactionItemProps> = ({ exchangedItem, ...props }) => (
  <TransactionItem {...{ exchangedItem, ...props }}>
    <IoMdSwap className="text-lg text-neutral-500" />
    {exchangedItem.name}
  </TransactionItem>
);
