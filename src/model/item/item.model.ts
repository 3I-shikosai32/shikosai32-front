import type { Character } from '../character.model';
import type { Id } from '../id.model';
import type { ResourceURL } from '../resource-url.model';

export type ItemLayer = 0 | 1 | 2 | 3 | 4;
export type Item = {
  character: Character;
  id: Id;
  layer: ItemLayer;
  url: ResourceURL;
};
