import { useCallback } from 'react';
import { useJoinGameMutation } from '@/infra/graphql/generated/graphql';
import type { Game } from '@/model/game/game.model';
import type { User } from '@/model/user/user.model';

import { ParticipatingGameKeyDictionaryFromGql } from '@/use-case/game-key-conversion-dictionary';

export type UseJoinGameUseCaseResult = {
  joinGame: ({ user, game }: { user: Partial<Pick<User, 'id'>> | null; game: Game }) => Promise<Pick<User, 'id' | 'participateGame'> | null>;
};

export const useJoinGameUseCase = (): UseJoinGameUseCaseResult => {
  const [, executeMutation] = useJoinGameMutation();
  const joinGame = useCallback<UseJoinGameUseCaseResult['joinGame']>(
    async ({ user, game }) => {
      if (user === null || !user.id) return null;
      const { data, error } = await executeMutation({ userId: user.id, game });
      if (error || !data) return null;
      return {
        id: data.joinGame.id,
        participateGame: ParticipatingGameKeyDictionaryFromGql[data.joinGame.participateGame],
      };
    },
    [executeMutation],
  );
  return {
    joinGame,
  };
};
