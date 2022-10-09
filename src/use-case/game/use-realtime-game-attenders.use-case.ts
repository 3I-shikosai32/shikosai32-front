import { useMemo } from 'react';
import { useUpdatedGameAttendersSubscription, GameAttenderBioDataFragment } from '@/infra/graphql/generated/graphql';
import type { GameAttendersDictionary } from '@/model/game/game-attenders-dictionary.model';
import { Game } from '@/model/game/game.model';

const userTranspiler = (user: GameAttenderBioDataFragment): GameAttendersDictionary[Game][number] => ({
  id: user.id,
  iconUrl: user.characterStatus.iconUrl,
});

export type UseRealtimeGameAttendersUseCaseResult = {
  attendersDictionary: GameAttendersDictionary | null;
};

export const useRealtimeGameAttendersUseCase = (): UseRealtimeGameAttendersUseCaseResult => {
  const [res] = useUpdatedGameAttendersSubscription({
    context: {
      maskTypename: true,
    },
  });
  const data = res.data?.updatedGameAttenders;
  const attendersDictionary: GameAttendersDictionary | null = useMemo(() => {
    if (data) {
      return {
        [Game.Xeno]: data.xeno.map(userTranspiler),
        [Game.IceRaze]: data.ice_raze.map(userTranspiler),
        [Game.Poker]: data.poker.map(userTranspiler),
        [Game.President]: data.president.map(userTranspiler),
        [Game.WeDidntPlaytest]: data.we_didnt_playtest.map(userTranspiler),
        [Game.CoinDropping]: data.coin_dropping.map(userTranspiler),
      };
    }
    return null;
  }, [data]);
  return { attendersDictionary };
};
