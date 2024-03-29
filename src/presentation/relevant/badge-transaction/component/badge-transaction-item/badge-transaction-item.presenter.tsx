import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import { CharacterIconUrlDictionary, CharacterNameDictionary } from '@/model/character/character.model';
import type { BadgeTransaction } from '@/model/transaction/badge-transaction.model';
import { Icon } from '@/presentation/primitive/component/icon/icon.presenter';
import { TransactionItem, TransactionItemProps } from '@/presentation/primitive/component/transaction-item/transaction-item.presenter';

export type BadgeTransactionItemData = BadgeTransaction;

export type BadgeTransactionItemProps = Omit<TransactionItemProps, 'children'> & BadgeTransactionItemData;
export const BadgeTransactionItem: FC<BadgeTransactionItemProps> = ({ exchangedItem, ...props }) => (
  <TransactionItem {...{ exchangedItem, ...props }}>
    {!!exchangedItem && (
      <>
        <IoMdSwap className="text-lg text-neutral-500" />
        <Icon className="inline h-6" src={CharacterIconUrlDictionary[exchangedItem]} />
        {`${CharacterNameDictionary[exchangedItem]} の缶バッジ`}
      </>
    )}
  </TransactionItem>
);
