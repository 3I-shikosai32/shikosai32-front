import type { Item } from '../item/item.model';
import type { UserBio } from '../user/user-bio.model';
import type { UserCharacterStatus } from '../user/user-character-status.model';

export type DetailedGameAttender = UserBio & {
  avatarUrl: UserCharacterStatus['avaterUrl'];
  itemLayerUrls: Array<Item['layerUrl']>; // NOTE: 配列の添字がより大きいものを優先して上に表示する設計にする
};

export type DetailedGameAttenders = Array<DetailedGameAttender>;
