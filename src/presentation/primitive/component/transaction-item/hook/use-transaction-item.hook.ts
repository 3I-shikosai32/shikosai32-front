import { useCallback } from 'react';
import type { TransactionItemProps } from '../transaction-item.presenter';

import { useFormatDateInDistance } from '@/presentation/primitive/hook/date/format-date-in-distance.hook';

const fallbackDate = new Date(0);

type UseTransactionItemProps = Pick<TransactionItemProps, 'isDelivered' | 'id' | 'onSubmit' | 'createdAt' | 'deliveredAt'>;

export const useTransactionItem = ({ createdAt, deliveredAt, isDelivered, id, onSubmit }: UseTransactionItemProps) => {
  const submitButtonDisplay = isDelivered ? '取り消し' : '受け渡し済みとして記録';
  const createdAtDisplay = `${useFormatDateInDistance(createdAt)}前`;
  const deliveredAtDisplay = `${useFormatDateInDistance(deliveredAt || fallbackDate)}前に受渡済`;
  const submitButtonClickHandler = useCallback(() => {
    onSubmit({ id, isDelivered: !isDelivered });
  }, [id, isDelivered, onSubmit]);
  return { submitButtonClickHandler, submitButtonDisplay, createdAtDisplay, deliveredAtDisplay };
};
