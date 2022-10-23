import { SortOrder, useFindItemCompletedCharacterStatusesQuery } from '@/infra/graphql/generated/graphql';
import type { BadgeTransaction } from '@/model/transaction/badge-transaction.model';

export type UseBadgeSalesDataUseCaseResult = {
  badgeHistories: Array<BadgeTransaction | undefined> | undefined | null;
};

export const useFindItemCompletedCharacterStatusesUseCase = (): UseBadgeSalesDataUseCaseResult => {
  const [{ data, fetching, error }] = useFindItemCompletedCharacterStatusesQuery({
    variables: {
      orderBy: {
        itemCompletedHistory: {
          createdAt: SortOrder.Desc,
        },
      },
    },
    requestPolicy: 'cache-and-network',
  });

  if (fetching || !data) {
    return {
      badgeHistories: undefined,
    };
  }
  if (error) {
    return {
      badgeHistories: null,
    };
  }

  return {
    badgeHistories: data.findItemCompletedCharacterStatuses.map((badgeHistory) =>
      badgeHistory.itemCompletedHistory
        ? {
            id: badgeHistory.id,
            isDelivered: badgeHistory.itemCompletedHistory.isDelivered || false,
            receiver: {
              name: badgeHistory.user.name,
              iconUrl: badgeHistory.iconUrl,
            },
            exchangedItem: badgeHistory.character,
            createdAt: badgeHistory.itemCompletedHistory.createdAt,
            deliveredAt: badgeHistory.itemCompletedHistory.deliveredAt ?? undefined,
          }
        : undefined,
    ),
  };
};
