import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import { Icon } from '@/components/Icon';
import { TransactionItem, TransactionItemProps } from '@/components/TransactionItem';
import type { UserItemData } from '@/components/UserItem';
import type { Character } from '@/libs/graphql/generated/graphql';

import { CharacterIconUrlDictionary, CharacterNameDictionary } from '@/utils/characterDictionary';

export type BadgeTransactionItemData = UserItemData & {
  exchangedBadge?: Character;
};

export type BadgeTransactionItemProps = Omit<TransactionItemProps, 'children'> & BadgeTransactionItemData;
export const BadgeTransactionItem: FC<BadgeTransactionItemProps> = ({ exchangedBadge, ...props }) => (
  <TransactionItem {...props}>
    {!!exchangedBadge && (
      <>
        <IoMdSwap className="text-lg text-neutral-500" />
        <Icon className="inline h-6" src={CharacterIconUrlDictionary[exchangedBadge]} />
        {`${CharacterNameDictionary[exchangedBadge]} の缶バッジ`}
      </>
    )}
  </TransactionItem>
);
BadgeTransactionItem.defaultProps = {
  exchangedBadge: undefined,
};
