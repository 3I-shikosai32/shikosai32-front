import type { GiftItemProps } from '.';

export type EvaluateAvailableAmountProps = Pick<GiftItemProps, 'consumablePoint' | 'price' | 'remaining'>;

export const evaluateAvailableAmount = ({ consumablePoint, price, remaining }: EvaluateAvailableAmountProps): number => {
  const affordableAmount = Math.floor(consumablePoint / price);
  return Math.max(Math.min(affordableAmount, remaining), 0);
};
