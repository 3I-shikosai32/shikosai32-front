import { useMemo } from 'react';
import type { RankingData } from '@/model/ranking/ranking-data.model';

import { RankingPeriod } from '@/model/ranking/ranking-period.model';
import { useRealtimeRankingCategoryDataUseCase } from '@/use-case/ranking/use-realtime-ranking-category-data.use-case';

export type UseRealtimeRankingDataUseCaseResult = {
  rankingData: RankingData;
};

// TODO: 🤮みたいなコードをどうにかする
export const useRealtimeRankingDataUseCase = (): UseRealtimeRankingDataUseCaseResult => {
  const { rankingCategoryData: day1Total } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY1,
    category: 'TOTAL',
  });
  const { rankingCategoryData: day1Fox } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY1,
    category: 'FOX',
  });
  const { rankingCategoryData: day1Cat } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY1,
    category: 'CAT',
  });
  const { rankingCategoryData: day1Goku } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY1,
    category: 'GOKU',
  });
  const { rankingCategoryData: day1Reaper } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY1,
    category: 'REAPER',
  });
  const { rankingCategoryData: day1Tree } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY1,
    category: 'TREE',
  });
  const { rankingCategoryData: day1Pudding } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY1,
    category: 'PUDDING',
  });

  const { rankingCategoryData: day2Total } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY2,
    category: 'TOTAL',
  });
  const { rankingCategoryData: day2Fox } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY2,
    category: 'FOX',
  });
  const { rankingCategoryData: day2Cat } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY2,
    category: 'CAT',
  });
  const { rankingCategoryData: day2Goku } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY2,
    category: 'GOKU',
  });
  const { rankingCategoryData: day2Reaper } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY2,
    category: 'REAPER',
  });
  const { rankingCategoryData: day2Tree } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY2,
    category: 'TREE',
  });
  const { rankingCategoryData: day2Pudding } = useRealtimeRankingCategoryDataUseCase({
    period: RankingPeriod.DAY2,
    category: 'PUDDING',
  });

  const day1RankingData: RankingData[RankingPeriod] = useMemo(
    () => ({
      TOTAL: day1Total || [],
      FOX: day1Fox || [],
      CAT: day1Cat || [],
      GOKU: day1Goku || [],
      REAPER: day1Reaper || [],
      TREE: day1Tree || [],
      PUDDING: day1Pudding || [],
    }),
    [day1Total, day1Fox, day1Cat, day1Goku, day1Reaper, day1Tree, day1Pudding],
  );
  const day2RankingData: RankingData[RankingPeriod] = useMemo(
    () => ({
      TOTAL: day2Total || [],
      FOX: day2Fox || [],
      CAT: day2Cat || [],
      GOKU: day2Goku || [],
      REAPER: day2Reaper || [],
      TREE: day2Tree || [],
      PUDDING: day2Pudding || [],
    }),
    [day2Total, day2Fox, day2Cat, day2Goku, day2Reaper, day2Tree, day2Pudding],
  );
  const rankingData: RankingData = useMemo(
    () => ({
      [RankingPeriod.DAY1]: day1RankingData,
      [RankingPeriod.DAY2]: day2RankingData,
    }),
    [day1RankingData, day2RankingData],
  );
  return {
    rankingData,
  };
};
