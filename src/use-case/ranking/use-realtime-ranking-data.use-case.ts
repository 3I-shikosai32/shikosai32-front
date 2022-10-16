import { dummyRankingData } from '@/constant/dummy-ranking-data';
import type { RankingData } from '@/model/ranking/ranking-data.model';

export type UseRealtimeRankingDataUseCaseResult = {
  rankingData: RankingData;
};

// テスト用のダミーデータをとりあえず返しておいている
// TODO: 本番用の実装に差し替える
export const useRealtimeRankingDataUseCase = (): UseRealtimeRankingDataUseCaseResult => ({
  rankingData: dummyRankingData,
});
