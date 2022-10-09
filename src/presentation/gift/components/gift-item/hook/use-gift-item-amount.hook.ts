import { useMemo, useState, useEffect } from 'react';
import { evaluateAvailableAmount } from '../evaluate-available-amount';
import type { GiftItemProps } from '../gift-item.component';

export type UseGiftItemAmountProps = Pick<GiftItemProps, 'consumablePoint' | 'price' | 'remaining'>;

export const DEFAULT_AMOUNT = 1; // セレクタの初期値でも使用するためにexportしておく
export const STOCK_INDICATE_AMOUNT = 5; // 残り在庫数を表示するしきい値 (1以上この値以下の場合に表示する) storybookで使用するためにexportしておく

export const useGiftItemAmount = ({ consumablePoint, price, remaining }: UseGiftItemAmountProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(DEFAULT_AMOUNT);
  const availableAmount = useMemo(() => evaluateAvailableAmount({ consumablePoint, price, remaining }), [consumablePoint, price, remaining]);

  const isAffordable = useMemo(() => consumablePoint >= price, [consumablePoint, price]);
  const isInStock = useMemo(() => remaining > 0, [remaining]);
  const isAvailable = useMemo(() => isAffordable && isInStock, [isAffordable, isInStock]);
  const doesIndicateRemaining = useMemo(() => isInStock && remaining <= STOCK_INDICATE_AMOUNT, [remaining, isInStock]);

  const selectableAmounts = useMemo(() => Array.from(Array(Math.max(availableAmount, 1)).keys()).map((_, i) => i + 1), [availableAmount]); // [1, 2, ... availableAmount]の整数配列を生成
  // 選択中の数量が選択可能な数量の範囲外になった場合はデフォルトの数量に戻す
  useEffect(() => {
    if (!selectableAmounts.find((amount) => amount === selectedAmount)) {
      setSelectedAmount(DEFAULT_AMOUNT);
    }
  }, [selectedAmount, selectableAmounts]);

  return { selectedAmount, setSelectedAmount, selectableAmounts, isAffordable, isInStock, isAvailable, doesIndicateRemaining };
};
