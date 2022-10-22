import { useCallback } from 'react';
import { useIncrementPointMutation } from '@/infra/graphql/generated/graphql';
import type { User } from '@/model/user/user.model';

type Point = number;

export const useIncrementPointUseCase = () => {
  const [, executeMutation] = useIncrementPointMutation();
  const incrementPoint = useCallback(
    (distribution: Record<User['id'], Point>) => {
      executeMutation({
        users: Object.entries(distribution).map(([authId, point]) => ({ id: authId, increment: point })),
      });
    },
    [executeMutation],
  );
  return {
    incrementPoint,
  };
};
