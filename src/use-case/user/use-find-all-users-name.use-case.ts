import type { User } from '../../model/user/user.model';
import { useFindAllUsersNameQuery } from '@/infra/graphql/generated/graphql';

export type UseFindAllUsersNameUseCaseResult = Array<User['name']> | null;

export const useFindAllUsersNameUseCase = (): UseFindAllUsersNameUseCaseResult => {
  const [{ data, fetching, error }] = useFindAllUsersNameQuery({
    requestPolicy: 'cache-and-network',
  });

  if (!fetching && !error && data && data.findUsers) {
    return data.findUsers.map((user) => user.name);
  }

  return null;
};
