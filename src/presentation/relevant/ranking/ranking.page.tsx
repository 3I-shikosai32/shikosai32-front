import { Ranking } from './ranking.presenter';
import { useRealtimeRankingDataUseCase } from '@/use-case/ranking/use-realtime-ranking-data.use-case';

export const RankingPage = () => {
  const { rankingData } = useRealtimeRankingDataUseCase();
  return <Ranking rankingData={rankingData} />;
};
