import type { UserBio } from '../user/user-bio.model';

export type GameAttenders = Array<Pick<UserBio, 'id' | 'iconUrl'>>;
