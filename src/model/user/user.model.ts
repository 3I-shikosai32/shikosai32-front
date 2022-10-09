import type { Game } from '../game/game.model';
import type { Id } from '../id.model';
import type { Points } from './points.model';
import type { UserCharacterStatus } from './user-character-status.model';
import type { UserRole } from './user-role.model';

export type User = {
  id: Id;
  name: string;
  email: string;
  role: UserRole;
  pullableGachaTimes: number;
  createdAt: Date;
  points: Points;
  characterStatus: UserCharacterStatus;
  participateGame: Game;
};
