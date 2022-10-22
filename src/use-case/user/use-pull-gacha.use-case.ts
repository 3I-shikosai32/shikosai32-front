import { useCallback } from 'react';
import { usePullGachaMutation } from '@/infra/graphql/generated/graphql';
import type { Item } from '@/model/item/item.model';
import type { User } from '@/model/user/user.model';

export type UseJoinGameUseCaseResult = {
  lootedItem: Pick<Item, 'iconUrl'> | undefined | null;
  pullGacha: (user: Partial<Pick<User, 'id'>>) => void;
};

export const usePullGachaUseCase = (): UseJoinGameUseCaseResult => {
  const [{ data, fetching, error }, executeMutation] = usePullGachaMutation();
  const pullGacha = useCallback<UseJoinGameUseCaseResult['pullGacha']>(
    async (user) => {
      if (user === null || !user.id) return;
      await executeMutation({ authId: user.id });
    },
    [executeMutation],
  );
  if (fetching)
    return {
      lootedItem: undefined,
      pullGacha,
    };
  if (error || !data)
    return {
      lootedItem: null,
      pullGacha,
    };
  return {
    lootedItem: {
      iconUrl: data.pullGacha?.iconUrl,
    },
    pullGacha,
  };
};
