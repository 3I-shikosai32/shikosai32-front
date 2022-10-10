import type { Character } from '../character/character.model';

export type ItemLayer = 0 | 1 | 2 | 3 | 4;
export type Item = {
  character: Character;
  id: string;
  layer: ItemLayer;
  url: string;
};
