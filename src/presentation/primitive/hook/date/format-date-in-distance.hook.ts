import { formatDistance } from 'date-fns';
import ja from 'date-fns/locale/ja';
import { useEffect, useState, useMemo } from 'react';

export const useFormatDateInDistance = (date: Date) => {
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
