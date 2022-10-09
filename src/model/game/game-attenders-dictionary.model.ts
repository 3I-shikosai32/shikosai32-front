import type { GameAttenders } from '@/model/game/game-attenders.model';
import { Game } from '@/model/game/game.model';

export type GameAttendersDictionary = Record<Game, GameAttenders>;

export const emptyGameAttendersDictionary: GameAttendersDictionary = {
  [Game.CoinDropping]: [],
  [Game.Xeno]: [],
  [Game.IceRaze]: [],
  [Game.Poker]: [],
  [Game.President]: [],
  [Game.WeDidntPlaytest]: [],
};
