import { useCallback } from 'react';
import { useFindRankingPositionQuery } from '@/infra/graphql/generated/graphql';
import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';

export type UseRankingPositionUseCaseProps = Partial<Pick<RankedUserBio, 'id'>>;

export type UseRankingPositionUseCaseResult = {
  place: RankedUserBio['place'] | undefined | null;
  refetch: () => void;
};

export const useRankingPositionUseCase = ({ id }: UseRankingPositionUseCaseProps): UseRankingPositionUseCaseResult => {
  const [{ data, fetching, error }, reexecuteQuery] = useFindRankingPositionQuery({
    variables: { userId: id || '**idが未指定のときはQueryは送られません**' },
    pause: !id,
    requestPolicy: 'cache-and-network',
  });
  const refetch = useCallback(() => reexecuteQuery(), [reexecuteQuery]);
  if (fetching || !data)
    return {
      place: undefined,
      refetch,
    };
  if (error)
    return {
      place: null,
      refetch,
    };
  return {
    place: data?.getRankingPosition,
    refetch,
  };
};
