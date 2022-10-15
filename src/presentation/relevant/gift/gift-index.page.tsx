import { FC, useCallback } from 'react';
import type { GiftItemProps } from './component/gift-item/gift-item.presenter';
import { GiftIndex } from './gift-index.presenter';
import { useExchangeGiftUseCase } from '@/use-case/gift/use-exchange-gift.use-case';
import { useGiftSalesDataUseCase } from '@/use-case/gift/use-gift-sales-data.use-case';
import { useCurrentUserIdUseCase } from '@/use-case/user/use-current-user-id.use-case';
import { useUserConsumablePointUseCase } from '@/use-case/user/use-user-consumable-point.use-case';

export const GiftIndexPage: FC = () => {
  const { gifts, refetch: refetchGiftsSalesData } = useGiftSalesDataUseCase();
  const currentUser = useCurrentUserIdUseCase();
  const { consumablePoint, refetch: refetchUserConsumablePoint } = useUserConsumablePointUseCase({
    id: currentUser === null ? undefined : currentUser.id,
  });
  const { exchangeGift } = useExchangeGiftUseCase();
  const onExchangeHandler = useCallback<GiftItemProps['onExchange']>(
    async ({ id, amount }) => {
      if (currentUser !== null) {
        if (currentUser.id) {
          await exchangeGift({
            giftId: id,
            amount,
            userId: currentUser.id,
          });
        }
      }
      refetchGiftsSalesData();
      refetchUserConsumablePoint();
    },
    [exchangeGift, refetchGiftsSalesData, refetchUserConsumablePoint, currentUser],
  );
  return (
    <GiftIndex gifts={gifts} consumablePoint={consumablePoint} onExchange={onExchangeHandler} isInteractive={currentUser !== null && !!currentUser} />
  );
};
