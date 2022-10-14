import { useCallback } from 'react';
import { useExchangeGiftMutation } from '@/infra/graphql/generated/graphql';
import type { Gift } from '@/model/gift/gift.model';
import type { GiftTransaction } from '@/model/transaction/gift-transaction.model';
import type { User } from '@/model/user/user.model';

export type UseExchangeGiftUseCaseResult = {
  exchangeGift: ({ giftId, userId, amount }: { giftId: Gift['id']; userId: User['id']; amount: number }) => Promise<{
    giftTransactionId: Array<GiftTransaction['id']> | undefined | null;
  }>;
};

export const useExchangeGiftUseCase = (): UseExchangeGiftUseCaseResult => {
  const [, executeMutation] = useExchangeGiftMutation();
  const exchangeGift = useCallback<UseExchangeGiftUseCaseResult['exchangeGift']>(
    async ({ giftId, userId, amount }) => {
      const result = await executeMutation({ giftId, userId, amount });
      const giftTransactionId = result.data?.exchangeGift.map((giftTransaction) => giftTransaction.id);
      return { giftTransactionId };
    },
    [executeMutation],
  );
  return {
    exchangeGift,
  };
};
