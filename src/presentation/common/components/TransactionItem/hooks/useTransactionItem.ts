import { formatDistance } from 'date-fns';
import ja from 'date-fns/locale/ja';
import { useCallback, useEffect, useState, useMemo } from 'react';
import type { TransactionItemProps } from '..';

const useFormatDate = (date: Date) => {
  const [now, setNow] = useState(new Date());

  // 10秒ごとに現在時刻を更新する
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [now, setNow]);

  const result = useMemo(() => formatDistance(date, now, { locale: ja, includeSeconds: true }), [date, now]);
  return result;
};

const fallbackDate = new Date(0);

type UseTransactionItemProps = Pick<TransactionItemProps, 'isDelivered' | 'id' | 'onSubmit' | 'createdAt' | 'deliveredAt'>;

export const useTransactionItem = ({ createdAt, deliveredAt, isDelivered, id, onSubmit }: UseTransactionItemProps) => {
  const submitButtonDisplay = isDelivered ? '取り消し' : '受け渡し済みとして記録';
  const createdAtDisplay = `${useFormatDate(createdAt)}前`;
  const deliveredAtDisplay = `${useFormatDate(deliveredAt || fallbackDate)}前に受渡済`;
  const submitButtonClickHandler = useCallback(() => {
    onSubmit({ id, isDelivered: !isDelivered });
  }, [id, isDelivered, onSubmit]);
  return { submitButtonClickHandler, submitButtonDisplay, createdAtDisplay, deliveredAtDisplay };
};
