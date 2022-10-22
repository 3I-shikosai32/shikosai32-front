import type { FC } from 'react';
import { Card } from '../../primitive/component/card/card.presenter';
import { GiftTransactionItem } from './component/gift-transaction-item/gift-transaction-item.presenter';
import { useChangeDeliveryStateGiftHistoryUseCase } from '@/use-case/gift-transaction/use-change-delivery-state-gift-history.use-case';
import { useFindGiftHistoriesUseCase } from '@/use-case/gift-transaction/use-find-gift-histories.use-case';

export const GiftTransaction: FC = () => {
  const { giftHistories } = useFindGiftHistoriesUseCase();
  const { changeDeliveryStateGiftHistory } = useChangeDeliveryStateGiftHistoryUseCase();

  return (
    <Card className="my-10 mx-3">
      <h1 className="text-3xl font-bold">景品交換履歴</h1>
      <span>順位ごとのポイントと所定のボーナスポイントを考慮して、各プレイヤーに付与するポイントを入力してください。</span>
      <Card className="bg-[#F0F1F2] shadow-none">
        {giftHistories?.map((giftHistory) => (
          <GiftTransactionItem
            key={giftHistory.id}
            id={giftHistory.id}
            exchangedItem={giftHistory.exchangedItem}
            createdAt={giftHistory.createdAt}
            isDelivered={giftHistory.isDelivered}
            onSubmit={async () => {
              await changeDeliveryStateGiftHistory(giftHistory.id, !giftHistory.isDelivered);
            }}
            receiver={giftHistory.receiver}
            className="w-full"
          />
        ))}
      </Card>
    </Card>
  );
};
