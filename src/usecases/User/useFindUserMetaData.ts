import { useFindUserMetaDataQuery, Role } from '@/infra/graphql/generated/graphql';
import type { User } from '@/model/User';
import { UserRole } from '@/model/User';

const RoleConversionTable: Record<Role, UserRole> = {
  [Role.Admin]: UserRole.Admin,
  [Role.User]: UserRole.User,
};

export type UseFindUserMetaDataProps = Partial<Pick<User, 'id'>>;
export type UseFindUserMetaDataResult =
  | (Pick<User, 'id' | 'name' | 'email' | 'role'> & {
      characterStatus: Pick<User['characterStatus'], 'id' | 'iconUrl' | 'character'>;
    })
  | null;

export const useFindUserMetaData = ({ id }: UseFindUserMetaDataProps): UseFindUserMetaDataResult => {
  const [result] = useFindUserMetaDataQuery({
    variables: { id: id || '**idが未指定のときはQueryは送られません**' },
    pause: !id,
    requestPolicy: 'cache-and-network',
  });
  const { data, fetching, error } = result;
  if (id && !fetching && !error && data && data.findUser) {
    return {
      id: data.findUser.id,
      name: data.findUser.name,
      email: data.findUser.email,
      role: RoleConversionTable[data.findUser.role],
      characterStatus: {
        id: data.findUser.characterStatus.id,
        iconUrl: data.findUser.characterStatus.iconUrl,
        character: data.findUser.characterStatus.character,
      },
    };
  }
  return null;
};
