import { useCallback } from 'react';
import type { OperationResult } from 'urql';
import {
  ChangeDeliveryStateCharacterStatusMutation,
  Exact,
  CharacterStatusWhereUniqueInput,
  useChangeDeliveryStateCharacterStatusMutation,
} from '@/infra/graphql/generated/graphql';

export type UseChangeDeliveryStateCharacterStatusUseCaseResult = {
  changeDeliveryStateCharacterStatus: (
    giftHistoryId: string,
    isDelivered: boolean,
  ) => Promise<
    OperationResult<
      ChangeDeliveryStateCharacterStatusMutation,
      Exact<{
        delivered: boolean;
        where: CharacterStatusWhereUniqueInput;
      }>
    >
  >;
};

export const useChangeDeliveryStateCharacterStatusUseCase = (): UseChangeDeliveryStateCharacterStatusUseCaseResult => {
  const [, executeMutation] = useChangeDeliveryStateCharacterStatusMutation();

  const changeDeliveryStateCharacterStatus = useCallback(
    (characterStatusId: string, isDelivered: boolean) =>
      executeMutation(
        {
          where: {
            id: characterStatusId,
          },
          delivered: isDelivered,
        },
        { requestPolicy: 'cache-and-network' },
      ),
    [executeMutation],
  );

  return { changeDeliveryStateCharacterStatus };
};
