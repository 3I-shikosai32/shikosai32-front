import type { Character } from '../character/character.model';

enum RankingUniqueCategory {
  TOTAL = 'TOTAL',
}

export type RankingCategory = `${Character}` | `${RankingUniqueCategory}`;

export const rankingCategories: Array<RankingCategory> = ['TOTAL', 'CAT', 'FOX', 'GOKU', 'PUDDING', 'REAPER', 'TREE'];
