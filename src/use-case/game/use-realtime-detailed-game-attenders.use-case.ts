import { useMemo, useCallback } from 'react';
import type { SubscriptionHandler } from 'urql';
import {
  useUpdatedDetailedGameAttendersSubscription,
  DetailedGameAttenderDataFragment,
  UpdatedDetailedGameAttendersSubscription,
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

export type UseRealtimeDetailedGameAttendersUseCaseProps = {
  game: Game;
};

export type UseRealtimeDetailedGameAttendersUseCaseResult = {
  attenders: DetailedGameAttenders;
};

export const useRealtimeDetailedGameAttendersUseCase = ({
  game,
}: UseRealtimeDetailedGameAttendersUseCaseProps): UseRealtimeDetailedGameAttendersUseCaseResult => {
  const reducer = useCallback<SubscriptionHandler<UpdatedDetailedGameAttendersSubscription, DetailedGameAttenders>>(
    (_, data) => {
      const gameKey = GameAttendersGameKeyDictionaryToGql[game];
      if (!(data && data.updatedGameAttenders && data.updatedGameAttenders[gameKey])) return [];
      const attenders: DetailedGameAttenders = data.updatedGameAttenders[gameKey].map(userTranspiler);
      return attenders;
    },
    [game],
  );

  const [res] = useUpdatedDetailedGameAttendersSubscription({}, reducer);
  return {
    attenders: useMemo(() => res.data || [], [res.data]),
  };
};
