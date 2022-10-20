import { useMemo } from 'react';
import {
  useGetRankingQuery,
  GetRankingQuery,
  useUpdatedRankingSubscription,
  UpdatedRankingSubscription,
  RankingPeriod as RankingPeriodInGql,
  RankingTarget as RankingCategoryInGql,
} from '@/infra/graphql/generated/graphql';

import type { RankingCategory } from '@/model/ranking/ranking-category.model';
import type { RankingData } from '@/model/ranking/ranking-data.model';

import { RankingPeriod } from '@/model/ranking/ranking-period.model';

type RankingCategoryFetchResult = GetRankingQuery['getRanking'] | UpdatedRankingSubscription['updatedRanking'];

const rankingCategoryTranspiler = (ranking: RankingCategoryFetchResult): RankingData[RankingPeriod][RankingCategory] =>
  ranking.map(({ point, user }, index) => ({
    id: user.id,
    name: user.name,
    iconUrl: user.characterStatus.iconUrl,
    point,
    place: index + 1,
  }));

const rankingPeriodConversionRecord: Record<RankingPeriod, RankingPeriodInGql> = {
  [RankingPeriod.DAY1]: RankingPeriodInGql.Day1,
  [RankingPeriod.DAY2]: RankingPeriodInGql.Day2,
};
const rankingCategoryConversionRecord: Record<RankingCategory, RankingCategoryInGql> = {
  TOTAL: RankingCategoryInGql.Total,
  FOX: RankingCategoryInGql.Fox,
  CAT: RankingCategoryInGql.Cat,
  GOKU: RankingCategoryInGql.Goku,
  REAPER: RankingCategoryInGql.Reaper,
  TREE: RankingCategoryInGql.Tree,
  PUDDING: RankingCategoryInGql.Pudding,
};

export type UseRealtimeRankingCategoryDataUseCaseProps = {
  period: RankingPeriod;
  category: RankingCategory;
};

export type UseRealtimeRankingCategoryDataUseCaseResult = {
  rankingCategoryData: RankingData[RankingPeriod][RankingCategory] | null | undefined;
};

export const useRealtimeRankingCategoryDataUseCase = ({
  period,
  category,
}: UseRealtimeRankingCategoryDataUseCaseProps): UseRealtimeRankingCategoryDataUseCaseResult => {
  const [initialResult] = useGetRankingQuery({
    variables: {
      date: rankingPeriodConversionRecord[period],
      rankingTarget: rankingCategoryConversionRecord[category],
    },
  });
  const [updatedResult] = useUpdatedRankingSubscription({
    variables: {
      date: rankingPeriodConversionRecord[period],
      rankingTarget: rankingCategoryConversionRecord[category],
    },
  });

  const result = useMemo<UseRealtimeRankingCategoryDataUseCaseResult['rankingCategoryData']>(() => {
    if (initialResult.error || updatedResult.error) {
      return null;
    }
    if (updatedResult.data) {
      return rankingCategoryTranspiler(updatedResult.data.updatedRanking);
    }
    if (initialResult.data) {
      return rankingCategoryTranspiler(initialResult.data.getRanking);
    }
    return undefined;
  }, [initialResult.data, updatedResult.data, initialResult.error, updatedResult.error]);

  return {
    rankingCategoryData: result,
  };
};
