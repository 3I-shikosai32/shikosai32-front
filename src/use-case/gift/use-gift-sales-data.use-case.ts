import { useCallback } from 'react';
import { useFindGiftSalesDataQuery } from '@/infra/graphql/generated/graphql';
import type { Gift } from '@/model/gift/gift.model';

export type UseGiftSalesDataUseCaseResult = {
  gifts: Array<Pick<Gift, 'id' | 'iconUrl' | 'name' | 'price' | 'remaining'>> | undefined | null;
  refetch: () => void;
};

export const useGiftSalesDataUseCase = (): UseGiftSalesDataUseCaseResult => {
  const [{ data, fetching, error }, reexecuteQuery] = useFindGiftSalesDataQuery({
    requestPolicy: 'cache-and-network',
  });
  const refetch = useCallback(() => {
    reexecuteQuery();
  }, [reexecuteQuery]);
  if (fetching || !data)
    return {
      gifts: undefined,
      refetch,
    };
  if (error)
    return {
      gifts: null,
      refetch,
    };
  return {
    gifts: data.findGifts.map((gift) => ({
      id: gift.id,
      iconUrl: gift.iconUrl,
      name: gift.name,
      price: gift.price,
      remaining: gift.remaining,
    })),
    refetch,
  };
};
