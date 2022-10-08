import type { Id, ResourceURL, Character } from '..';
import type { Game } from '../Game';
import type { Item } from '../Item';

export type Points = {
  day1: number;
  day2: number;
  consumable: number;
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER',
}

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

export type UserCharacterStatus = {
  character: Character;
  iconUrl: ResourceURL;
  avaterUrl: ResourceURL;
  points: Omit<Points, 'consumable'>;
  items: Array<Item>;
};

export type UserBio = Pick<User, 'id' | 'name'> & Pick<UserCharacterStatus, 'iconUrl'>;
