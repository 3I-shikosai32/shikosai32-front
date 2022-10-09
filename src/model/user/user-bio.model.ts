import type { UserCharacterStatus } from './user-character-status.model';
import type { User } from './user.model';

export type UserBio = Pick<User, 'id' | 'name'> & Pick<UserCharacterStatus, 'iconUrl'>;
