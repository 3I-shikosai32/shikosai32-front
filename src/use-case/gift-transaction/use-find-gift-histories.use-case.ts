import { useFindGiftHistoriesQuery } from '@/infra/graphql/generated/graphql';
import type { GiftTransaction } from '@/model/transaction/gift-transaction.model';

export type UseGiftSalesDataUseCaseResult = {
  giftHistories: Array<GiftTransaction> | undefined | null;
};

export const useFindGiftHistoriesUseCase = (): UseGiftSalesDataUseCaseResult => {
  const [{ data, fetching, error }] = useFindGiftHistoriesQuery({
    requestPolicy: 'cache-and-network',
  });

  if (fetching || !data) {
    return {
      giftHistories: undefined,
    };
  }
  if (error) {
    return {
      giftHistories: null,
    };
  }

  return {
    giftHistories: data.findGiftHistories.map((giftHistory) => ({
      id: giftHistory.id,
      isDelivered: giftHistory.isDelivered,
      receiver: {
        name: giftHistory.user.name,
        iconUrl: giftHistory.user.characterStatus.iconUrl,
      },
      exchangedItem: {
        name: giftHistory.exchangedGift.name,
      },
      createdAt: giftHistory.createdAt,
      deliveredAt: giftHistory.deliveredAt ?? undefined,
    })),
  };
};
