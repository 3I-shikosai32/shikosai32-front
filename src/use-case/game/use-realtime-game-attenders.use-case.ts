import { useMemo, useCallback } from 'react';
import type { SubscriptionHandler } from 'urql';
import {
  useUpdatedGameAttendersSubscription,
  GameAttenderBioDataFragment,
  UpdatedGameAttendersSubscription,
  useFindGameAttendersQuery,
  FindGameAttendersQuery,
} from '@/infra/graphql/generated/graphql';
import type { GameAttendersDictionary } from '@/model/game/game-attenders-dictionary.model';
import type { GameAttenders } from '@/model/game/game-attenders.model';
import type { Game } from '@/model/game/game.model';

import { GameAttendersGameKeyDictionaryToGql } from '@/use-case/game-key-conversion-dictionary';

const userTranspiler = (user: GameAttenderBioDataFragment): GameAttendersDictionary[Game][number] => ({
  id: user.id,
  iconUrl: user.characterStatus.iconUrl,
});

type GameAttendersFetchResult = FindGameAttendersQuery['getGameAttenders'] | UpdatedGameAttendersSubscription['updatedGameAttenders'];
const fetchResultTranspiler = ({ fetchResult, game }: { fetchResult?: GameAttendersFetchResult; game: Game }): GameAttendersDictionary[Game] => {
  const gameKey = GameAttendersGameKeyDictionaryToGql[game];
  if (!(fetchResult && fetchResult[gameKey])) return [];
  const attenders: GameAttenders = fetchResult[gameKey].map(userTranspiler);
  return attenders;
};

export type UseRealtimeGameAttendersUseCaseProps = {
  game: Game;
};

export type UseRealtimeGameAttendersUseCaseResult = {
  attenders: GameAttenders;
};

export const useRealtimeGameAttendersUseCase = ({ game }: UseRealtimeGameAttendersUseCaseProps): UseRealtimeGameAttendersUseCaseResult => {
  const [initialResult] = useFindGameAttendersQuery();
  const [updatedResult] = useUpdatedGameAttendersSubscription();
  const fetchResult = useMemo(
    () => updatedResult.data?.updatedGameAttenders || initialResult.data?.getGameAttenders,
    [updatedResult.data, initialResult.data],
  );
  // eslint-disable-next-line no-console
  console.log({ initialResult, updatedResult, fetchResult, game });
  return {
    attenders: fetchResultTranspiler({ fetchResult, game }),
  };
};
