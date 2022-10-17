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

// import type { User } from '../../model/user/user.model';
// import { useFindAllUsersNameQuery } from '@/infra/graphql/generated/graphql';

// export type UseFindAllUsersNameUseCaseResult = {
//   data:
//     | {
//         users: Array<User['name']>;
//       }
//     | undefined;
//   fetching: boolean;
// };

// export const useFindAllUsersNameUseCase = (): UseFindAllUsersNameUseCaseResult => {
//   const [{ data, fetching }] = useFindAllUsersNameQuery({
//     requestPolicy: 'cache-and-network',
//   });

//   return {
//     data: data
//       ? {
//           users: data.findUsers.map((user) => user.name),
//         }
//       : undefined,
//     fetching,
//   };
// };
