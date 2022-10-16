import { useMemo, useCallback } from 'react';
import type { SubscriptionHandler } from 'urql';
import {
  useUpdatedGameAttendersSubscription,
  GameAttenderBioDataFragment,
  UpdatedGameAttendersSubscription,
} from '@/infra/graphql/generated/graphql';
import type { GameAttendersDictionary } from '@/model/game/game-attenders-dictionary.model';
import type { GameAttenders } from '@/model/game/game-attenders.model';
import type { Game } from '@/model/game/game.model';

import { GameAttendersGameKeyDictionaryToGql } from '@/use-case/game-key-conversion-dictionary';

const userTranspiler = (user: GameAttenderBioDataFragment): GameAttendersDictionary[Game][number] => ({
  id: user.id,
  iconUrl: user.characterStatus.iconUrl,
});

export type UseRealtimeGameAttendersUseCaseProps = {
  game: Game;
};

export type UseRealtimeGameAttendersUseCaseResult = {
  attenders: GameAttenders;
};

export const useRealtimeGameAttendersUseCase = ({ game }: UseRealtimeGameAttendersUseCaseProps): UseRealtimeGameAttendersUseCaseResult => {
  const reducer = useCallback<SubscriptionHandler<UpdatedGameAttendersSubscription, GameAttenders>>(
    (_, data) => {
      const gameKey = GameAttendersGameKeyDictionaryToGql[game];
      if (!(data && data.updatedGameAttenders && data.updatedGameAttenders[gameKey])) return [];
      const attenders: GameAttenders = data.updatedGameAttenders[gameKey].map(userTranspiler);
      return attenders;
    },
    [game],
  );

  const [res] = useUpdatedGameAttendersSubscription({}, reducer);
  return {
    attenders: useMemo(() => res.data || [], [res.data]),
  };
};
