import { useCallback } from 'react';
import type { TransactionItemProps } from '..';

type UseTransactionItemProps = Pick<TransactionItemProps, 'isDelivered' | 'id' | 'onSubmit' | 'createdAt' | 'deliveredAt'>;

export const useTransactionItem = ({ isDelivered, id, onSubmit }: UseTransactionItemProps) => {
  const submitButtonDisplay = isDelivered ? '取り消し' : '受け渡し済みとして記録';
  const createdAtDisplay = '3分前';
  const deliveredAtDisplay = '1分前に受渡済';
  const submitButtonClickHandler = useCallback(() => {
    onSubmit({ id, isDelivered: !isDelivered });
  }, [id, isDelivered, onSubmit]);
  return { submitButtonClickHandler, submitButtonDisplay, createdAtDisplay, deliveredAtDisplay };
};
