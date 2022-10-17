import { useMemo } from 'react';
import { Ranking } from './ranking.presenter';
import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';
import { useRealtimeRankingDataUseCase } from '@/use-case/ranking/use-realtime-ranking-data.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';
import { useFindUserMetaDataUseCase } from '@/use-case/user/use-find-user-meta-data.use-case';
import { useRankingPositionUseCase } from '@/use-case/user/use-ranking-position.use-case';

export const RankingPage = () => {
  const { rankingData } = useRealtimeRankingDataUseCase();
  const currentUser = useCurrentUserIdUseCase();
  const currentUserMetaData = useFindUserMetaDataUseCase({
    id: currentUser?.id,
  });
  const { place } = useRankingPositionUseCase({
    id: currentUser?.id,
  });
  const rankedCurrentUserBio: RankedUserBio | undefined = useMemo(() => {
    if (!currentUserMetaData || !place) {
      return undefined;
    }
    return {
      id: currentUserMetaData.id,
      name: currentUserMetaData.name,
      iconUrl: currentUserMetaData.characterStatus.iconUrl,
      point: NaN, // TODO: ポイントを取得する
      place,
    };
  }, [currentUserMetaData, place]);
  return <Ranking rankingData={rankingData} rankedCurrentUserBio={rankedCurrentUserBio} />;
};
