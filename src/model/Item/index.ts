import type { Id, ResourceURL, Character } from '..';

export type ItemLayer = 0 | 1 | 2 | 3 | 4;
export type Item = {
  character: Character;
  id: Id;
  layer: ItemLayer;
  url: ResourceURL;
};
