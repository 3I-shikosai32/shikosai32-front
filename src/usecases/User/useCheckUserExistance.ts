import type { User } from '@/entity/User';

import { useCheckUserExistanceQuery } from '@/infra/graphql/generated/graphql';

export type UseCheckUserExistanceProps = Partial<Pick<User, 'id'>>;

// Firebase Auth提供の認証情報のユーザーのIDに対応したユーザー情報が、サーバーに登録されているかどうかを取得する
export const useCheckUserExistance = ({ id }: UseCheckUserExistanceProps): boolean => {
  const [result] = useCheckUserExistanceQuery({
    variables: { id: id || '**idが未指定のときはQueryは送られません**' },
    pause: !id,
    requestPolicy: 'cache-and-network',
  });
  return !!id && !!result.data?.findUser?.id;
};
