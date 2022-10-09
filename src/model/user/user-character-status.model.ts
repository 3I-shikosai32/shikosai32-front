import type { Character } from '../character.model';
import type { Id } from '../id.model';
import type { Item } from '../item/item.model';
import type { ResourceURL } from '../resource-url.model';
import type { Points } from './points.model';

export type UserCharacterStatus = {
  id: Id;
  character: Character;
  iconUrl: ResourceURL;
  avaterUrl: ResourceURL;
  points: Omit<Points, 'consumable'>;
  items: Array<Item>;
};
