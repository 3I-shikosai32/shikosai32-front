import { useCallback } from 'react';
import { useExitGameMutation } from '@/infra/graphql/generated/graphql';
import type { User } from '@/model/user/user.model';

import { ParticipatingGameKeyDictionaryFromGql } from '@/use-case/game-key-conversion-dictionary';

export type UseExitGameUseCaseResult = {
  exitGame: ({ user }: { user: Partial<Pick<User, 'id'>> | null }) => Promise<Pick<User, 'id' | 'participateGame'> | null>;
};

export const useExitGameUseCase = (): UseExitGameUseCaseResult => {
  const [, executeMutation] = useExitGameMutation();
  const exitGame = useCallback<UseExitGameUseCaseResult['exitGame']>(
    async ({ user }) => {
      if (user === null || !user.id) return null;
      const { data, error } = await executeMutation({ userId: user.id });
      if (error || !data) return null;
      return {
        id: data.exitGame.id,
        participateGame: ParticipatingGameKeyDictionaryFromGql[data.exitGame.participateGame],
      };
    },
    [executeMutation],
  );
  return {
    exitGame,
  };
};
