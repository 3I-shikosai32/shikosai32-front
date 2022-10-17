import { Game as GameGql, GameAttenders } from '@/infra/graphql/generated/graphql';
import { Game } from '@/model/game/game.model';

export const ParticipatingGameKeyDictionaryFromGql: Record<GameGql, Game | null> = {
  [GameGql.CoinDropping]: Game.CoinDropping,
  [GameGql.Xeno]: Game.Xeno,
  [GameGql.IceRaze]: Game.IceRaze,
  [GameGql.Poker]: Game.Poker,
  [GameGql.President]: Game.President,
  [GameGql.WeDidntPlaytest]: Game.WeDidntPlaytest,
  [GameGql.None]: null,
};

export const GameAttendersGameKeyDictionaryToGql: Record<Game, keyof Omit<GameAttenders, '__typename'>> = {
  [Game.CoinDropping]: 'coinDropping',
  [Game.Xeno]: 'xeno',
  [Game.IceRaze]: 'iceRaze',
  [Game.Poker]: 'poker',
  [Game.President]: 'president',
  [Game.WeDidntPlaytest]: 'weDidntPlaytest',
};
