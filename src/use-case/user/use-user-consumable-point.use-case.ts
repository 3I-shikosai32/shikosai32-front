import { useCallback } from 'react';
import { useFindUserConsumablePointQuery } from '@/infra/graphql/generated/graphql';
import type { User } from '@/model/user/user.model';

export type UseUserConsumablePointUseCaseProps = Partial<Pick<User, 'id'>>;
export type UseUserConsumablePointUseCaseResult = {
  consumablePoint: User['points']['consumable'] | undefined | null;
  refetch: () => void;
};

export const useUserConsumablePointUseCase = ({ id }: UseUserConsumablePointUseCaseProps): UseUserConsumablePointUseCaseResult => {
  const [{ data, fetching, error }, reexecuteQuery] = useFindUserConsumablePointQuery({
    variables: { id: id || '**idが未指定のときはQueryは送られません**' },
    pause: !id,
    requestPolicy: 'cache-and-network',
  });
  const refetch = useCallback(() => {
    reexecuteQuery();
  }, [reexecuteQuery]);
  if (fetching || !data)
    return {
      consumablePoint: undefined,
      refetch,
    };
  if (error || !id)
    return {
      consumablePoint: null,
      refetch,
    };
  return {
    consumablePoint: data.findUser?.consumablePoint,
    refetch,
  };
};
