import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import { TransactionItem, TransactionItemProps } from '@/components/TransactionItem';
import type { GiftHistoryDataFragment } from '@/infra/graphql/generated/graphql';

export type GiftTransactionItemData = Pick<GiftHistoryDataFragment, 'id' | 'isDelivered' | 'createdAt' | 'deliveredAt'> & {
  user: Pick<GiftHistoryDataFragment['user'], 'name' | 'iconUrl'>;
  exchangedGift: Pick<GiftHistoryDataFragment['exchangedGift'], 'name'>;
};

export type GiftTransactionItemProps = Omit<TransactionItemProps, 'children'> & GiftTransactionItemData;
export const GiftTransactionItem: FC<GiftTransactionItemProps> = ({ exchangedGift, ...props }) => (
  <TransactionItem {...props}>
    <IoMdSwap className="text-lg text-neutral-500" />
    {exchangedGift.name}
  </TransactionItem>
);
