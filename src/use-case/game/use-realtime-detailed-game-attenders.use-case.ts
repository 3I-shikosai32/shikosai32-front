import { useMemo } from 'react';
import {
  useUpdatedDetailedGameAttendersSubscription,
  DetailedGameAttenderDataFragment,
  UpdatedDetailedGameAttendersSubscription,
  useFindDetailedGameAttendersQuery,
  FindDetailedGameAttendersQuery,
} from '@/infra/graphql/generated/graphql';
import type { DetailedGameAttenders, DetailedGameAttender } from '@/model/game/detailed-game-attenders.model';
import type { Game } from '@/model/game/game.model';

import { GameAttendersGameKeyDictionaryToGql } from '@/use-case/game-key-conversion-dictionary';

const userTranspiler = (user: DetailedGameAttenderDataFragment): DetailedGameAttender => ({
  id: user.id,
  name: user.name,
  iconUrl: user.characterStatus.iconUrl,
  avatarUrl: user.characterStatus.avatarUrl,
  // NOTE: `itemLayerUrls`は、配列の添字がより大きいものを優先して上に表示する設計にする
  //        そのために、`layer`の昇順になるようにソートする
  itemLayerUrls: user.characterStatus.items.sort((item1, item2) => item1.layer - item2.layer).map((item) => item.layerUrl),
});

type DetailedGameAttendersFetchResult =
  | FindDetailedGameAttendersQuery['getGameAttenders']
  | UpdatedDetailedGameAttendersSubscription['updatedGameAttenders'];
const fetchResultTranspiler = ({ fetchResult, game }: { fetchResult?: DetailedGameAttendersFetchResult; game: Game }): DetailedGameAttenders => {
  const gameKey = GameAttendersGameKeyDictionaryToGql[game];
  if (!(fetchResult && fetchResult[gameKey])) return [];
  const attenders: DetailedGameAttenders = fetchResult[gameKey].map(userTranspiler);
  return attenders;
};

export type UseRealtimeDetailedGameAttendersUseCaseProps = {
  game: Game;
};

export type UseRealtimeDetailedGameAttendersUseCaseResult = {
  attenders: DetailedGameAttenders;
};

export const useRealtimeDetailedGameAttendersUseCase = ({
  game,
}: UseRealtimeDetailedGameAttendersUseCaseProps): UseRealtimeDetailedGameAttendersUseCaseResult => {
  const [initialResult] = useFindDetailedGameAttendersQuery();
  const [updatedResult] = useUpdatedDetailedGameAttendersSubscription();
  if (initialResult.error || updatedResult.error)
    throw new Error('useRealtimeDetailedGameAttendersUseCase: error', initialResult.error || updatedResult.error);
  const fetchResult = useMemo(
    () => updatedResult.data?.updatedGameAttenders || initialResult.data?.getGameAttenders,
    [updatedResult.data, initialResult.data],
  );
  return {
    attenders: fetchResultTranspiler({ fetchResult, game }),
  };
};
