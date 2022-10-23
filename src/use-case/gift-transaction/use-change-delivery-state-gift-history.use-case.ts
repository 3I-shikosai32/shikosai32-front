import { useCallback } from 'react';
import type { OperationResult } from 'urql';
import {
  ChangeDeliveryStateGiftHistoryMutation,
  Exact,
  GiftHistoryChangeDeliveryStateInput,
  GiftHistoryWhereUniqueInput,
  useChangeDeliveryStateGiftHistoryMutation,
} from '@/infra/graphql/generated/graphql';

export type UseChangeDeliveryStateGiftHistoryUseCaseResult = {
  changeDeliveryStateGiftHistory: (
    giftHistoryId: string,
    isDelivered: boolean,
  ) => Promise<
    OperationResult<
      ChangeDeliveryStateGiftHistoryMutation,
      Exact<{
        data: GiftHistoryChangeDeliveryStateInput;
        where: GiftHistoryWhereUniqueInput;
      }>
    >
  >;
};

export const useChangeDeliveryStateGiftHistoryUseCase = (): UseChangeDeliveryStateGiftHistoryUseCaseResult => {
  const [, executeMutation] = useChangeDeliveryStateGiftHistoryMutation();

  const changeDeliveryStateGiftHistory = useCallback(
    (giftHistoryId: string, isDelivered: boolean) =>
      executeMutation(
        {
          where: {
            id: giftHistoryId,
          },
          data: {
            isDelivered,
          },
        },
        { requestPolicy: 'cache-and-network' },
      ),
    [executeMutation],
  );

  return { changeDeliveryStateGiftHistory };
};
