import type { UserBio } from '../user/user-bio.model';
import type { Game } from './game.model';

export type GameAttenders = Record<Game, Array<UserBio>>;
