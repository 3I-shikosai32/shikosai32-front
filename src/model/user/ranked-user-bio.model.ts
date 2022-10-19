import type { UserBio } from './user-bio.model';

export type RankedUserBio = UserBio & {
  place: number; // 特定のカテゴリ、時間に依存しないその文脈での順位
  point?: number; // 特定のカテゴリ、時間に依存しないその文脈でのポイント
};
