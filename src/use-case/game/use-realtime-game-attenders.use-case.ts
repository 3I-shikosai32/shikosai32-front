import { useMemo, useCallback } from 'react';
import type { SubscriptionHandler } from 'urql';
import {
  useUpdatedGameAttendersSubscription,
  GameAttenderBioDataFragment,
  UpdatedGameAttendersSubscription,
} from '@/infra/graphql/generated/graphql';
import type { GameAttendersDictionary } from '@/model/game/game-attenders-dictionary.model';
import type { GameAttenders } from '@/model/game/game-attenders.model';
import { Game } from '@/model/game/game.model';

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

const GameKeyDictionary: Record<Game, keyof Omit<UpdatedGameAttendersSubscription['updatedGameAttenders'], '__typename'>> = {
  [Game.CoinDropping]: 'coin_dropping',
  [Game.Xeno]: 'xeno',
  [Game.IceRaze]: 'ice_raze',
  [Game.Poker]: 'poker',
  [Game.President]: 'president',
  [Game.WeDidntPlaytest]: 'we_didnt_playtest',
};

export const useRealtimeGameAttendersUseCase = ({ game }: UseRealtimeGameAttendersUseCaseProps): UseRealtimeGameAttendersUseCaseResult => {
  const reducer = useCallback<SubscriptionHandler<UpdatedGameAttendersSubscription, GameAttenders>>(
    (prev, data) => {
      const gameKey = GameKeyDictionary[game];
      if (!(data && data.updatedGameAttenders && data.updatedGameAttenders[gameKey])) return [];
      const attenders: GameAttenders = data.updatedGameAttenders[gameKey].map(userTranspiler);
      return attenders;
    },
    [game],
  );

  const [res] = useUpdatedGameAttendersSubscription(
    {
      context: {
        maskTypename: true,
      },
    },
    reducer,
  );
  return {
    attenders: useMemo(() => res.data || [], [res.data]),
  };
};
