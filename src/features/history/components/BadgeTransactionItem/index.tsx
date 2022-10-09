import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import { Icon } from '@/components/Icon';
import { TransactionItem, TransactionItemProps } from '@/components/TransactionItem';
import type { BadgeTransaction } from '@/model/Transaction';

import { CharacterIconUrlDictionary, CharacterNameDictionary } from '@/utils/characterDictionary';

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
