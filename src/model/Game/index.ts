import type { UserBio } from '../User';

export enum Game {
  CoinDropping = 'COIN_DROPPING',
  IceRaze = 'ICE_RAZE',
  None = 'NONE',
  Poker = 'POKER',
  President = 'PRESIDENT',
  WeDidntPlaytest = 'WE_DIDNT_PLAYTEST',
  Xeno = 'XENO',
}

export type GameAttenders = Record<Game, Array<UserBio>>;
