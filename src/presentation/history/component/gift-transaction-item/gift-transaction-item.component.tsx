import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import type { GiftTransaction } from '@/model/transaction/gift-transaction.model';
import { TransactionItem, TransactionItemProps } from '@/presentation/common/component/transaction-item/transaction-item.presenter';

export type GiftTransactionItemData = GiftTransaction;

export type GiftTransactionItemProps = Omit<TransactionItemProps, 'children'> & GiftTransactionItemData;
export const GiftTransactionItem: FC<GiftTransactionItemProps> = ({ exchangedItem, ...props }) => (
  <TransactionItem {...{ exchangedItem, ...props }}>
    <IoMdSwap className="text-lg text-neutral-500" />
    {exchangedItem.name}
  </TransactionItem>
);
