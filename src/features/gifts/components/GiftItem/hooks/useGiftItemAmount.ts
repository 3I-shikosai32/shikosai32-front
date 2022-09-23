import { useMemo, useState, useEffect } from 'react';
import { evaluateAvailableAmount } from '../evaluateAvailableAmount';
import type { GiftItemProps } from '../index';

export type UseGiftItemAmountProps = Pick<GiftItemProps, 'consumablePoint' | 'price' | 'remaining'>;

const DEFAULT_AMOUNT = 1;

export const useGiftItemAmount = ({ consumablePoint, price, remaining }: UseGiftItemAmountProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(DEFAULT_AMOUNT);
  const availableAmount = useMemo(() => evaluateAvailableAmount({ consumablePoint, price, remaining }), [consumablePoint, price, remaining]);

  const isAffordable = useMemo(() => consumablePoint >= price, [consumablePoint, price]);
  const isInStock = useMemo(() => remaining > 0, [remaining]);
  const isAvailable = useMemo(() => isAffordable && isInStock, [isAffordable, isInStock]);

  const selectableAmounts = useMemo(() => Array.from(Array(Math.max(availableAmount, 1)).keys()).map((_, i) => i + 1), [availableAmount]); // [1, 2, ... availableAmount]の整数配列を生成
  // 選択中の数量が選択可能な数量の範囲外になった場合はデフォルトの数量に戻す
  useEffect(() => {
    if (!selectableAmounts.find((amount) => amount === selectedAmount)) {
      setSelectedAmount(DEFAULT_AMOUNT);
    }
  }, [selectedAmount, selectableAmounts]);

  return { selectedAmount, setSelectedAmount, selectableAmounts, isAffordable, isInStock, isAvailable };
};
