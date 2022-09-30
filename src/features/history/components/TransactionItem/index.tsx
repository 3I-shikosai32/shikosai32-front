import type { FC } from 'react';
import { IoMdSwap } from 'react-icons/io';
import { useTransactionItem } from './hooks/useTransactionItem';
import { Button } from '@/components/Button';
import { MotionCard, MotionCardProps } from '@/components/Card';
import { UserInteractiveItem, UserInteractiveItemActionGroup } from '@/components/UserInteractiveItem';
import { UserItem, UserItemIcon, UserItemBio, UserItemName, UserItemDescription, UserItemTips } from '@/components/UserItem';
import type { GiftHistoryDataFragment } from '@/libs/graphql/generated/graphql';
import twMerge from '@/libs/twmerge';

export type TransactionItemData = Pick<GiftHistoryDataFragment, 'id' | 'isDelivered' | 'createdAt' | 'deliveredAt'> & {
  user: Pick<GiftHistoryDataFragment['user'], 'name' | 'iconUrl'>;
  exchangedGift: Pick<GiftHistoryDataFragment['exchangedGift'], 'name'>;
};

export type TransactionItemProps = Omit<MotionCardProps, 'children'> &
  TransactionItemData & {
    onSubmit:
      | (({ id, isDelivered }: Pick<TransactionItemData, 'id' | 'isDelivered'>) => void)
      | (({ id, isDelivered }: Pick<TransactionItemData, 'id' | 'isDelivered'>) => Promise<void>);
  };

export const TransactionItem: FC<TransactionItemProps> = ({
  id,
  isDelivered,
  createdAt,
  deliveredAt,
  user,
  exchangedGift,
  onSubmit,
  className,
  ...props
}) => {
  const { submitButtonClickHandler, submitButtonDisplay, createdAtDisplay, deliveredAtDisplay } = useTransactionItem({
    isDelivered,
    id,
    onSubmit,
    createdAt,
    deliveredAt,
  });
  return (
    <MotionCard key={id} {...props} className={twMerge(className)}>
      <UserInteractiveItem>
        <UserItem>
          <UserItemIcon name={user.name} iconUrl={user.iconUrl} />
          <UserItemBio>
            <UserItemName>{user.name}</UserItemName>
            <UserItemDescription
              aria-label="交換された景品の名前"
              className={twMerge(
                'ml-1 flex flex-row justify-start items-center gap-2 font-bold text-normal',
                isDelivered ? 'text-success-700' : 'text-warning-700',
              )}
            >
              <IoMdSwap className="text-lg text-neutral-500" />
              {exchangedGift.name}
            </UserItemDescription>
          </UserItemBio>
          <UserItemTips className="flex flex-col items-end justify-center gap-0 font-bold">
            <span aria-label="景品の交換が求められた日時">{createdAtDisplay}</span>
            {isDelivered && (
              <span aria-label="景品が受け渡された日時" className="text-xs text-neutral-500">
                {deliveredAtDisplay}
              </span>
            )}
          </UserItemTips>
        </UserItem>
        <UserInteractiveItemActionGroup>
          <Button outlined={isDelivered} className={twMerge(!isDelivered && 'bg-warning-500')} onClick={submitButtonClickHandler}>
            {submitButtonDisplay}
          </Button>
        </UserInteractiveItemActionGroup>
      </UserInteractiveItem>
    </MotionCard>
  );
};
