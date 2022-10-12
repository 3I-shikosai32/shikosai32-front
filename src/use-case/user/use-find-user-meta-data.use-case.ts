import { useFindUserMetaDataQuery, Role } from '@/infra/graphql/generated/graphql';
import { UserRole } from '@/model/user/user-role.model';
import type { User } from '@/model/user/user.model';

const RoleConversionTable: Record<Role, UserRole> = {
  [Role.Admin]: UserRole.Admin,
  [Role.User]: UserRole.User,
};

export type UseFindUserMetaDataUseCaseProps = Partial<Pick<User, 'id'>>;
export type UseFindUserMetaDataUseCaseResult =
  | (Pick<User, 'id' | 'name' | 'email' | 'role'> & {
      characterStatus: Pick<User['characterStatus'], 'id' | 'iconUrl' | 'character'>;
    })
  | null;

export const useFindUserMetaDataUseCase = ({ id }: UseFindUserMetaDataUseCaseProps): UseFindUserMetaDataUseCaseResult => {
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
