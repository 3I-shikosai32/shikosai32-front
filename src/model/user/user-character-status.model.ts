import type { Character } from '../character/character.model';
import type { Item } from '../item/item.model';
import type { Points } from './points.model';

export type UserCharacterStatus = {
  id: string;
  character: Character;
  iconUrl: string;
  avaterUrl: string;
  points: Omit<Points, 'consumable'>;
  items: Array<Item>;
};
