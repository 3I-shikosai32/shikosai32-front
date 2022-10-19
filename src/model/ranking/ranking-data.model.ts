import type { RankedUserBio } from '../user/ranked-user-bio.model';
import type { RankingCategory } from './ranking-category.model';
import type { RankingPeriod } from './ranking-period.model';

export type RankingData = Record<RankingPeriod, Record<RankingCategory, Array<RankedUserBio>>>;
