import type { FC } from 'react';
import { Card } from '../../primitive/component/card/card.presenter';
import { LoadingScreen } from '../../primitive/component/loading-screen/loading-screen.presenter';
import { useRoleGuard } from '../../primitive/hook/role-guard/role-guard.hook';
import { BadgeTransactionItem } from './component/badge-transaction-item/badge-transaction-item.presenter';
import { UserRole } from '@/model/user/user-role.model';
import { useChangeDeliveryStateCharacterStatusUseCase } from '@/use-case/badge-transaction/use-change-delivery-state-character-status.use-case';
import { useFindItemCompletedCharacterStatusesUseCase } from '@/use-case/badge-transaction/use-find-item-completed-character-statuses.use-case';

export const BadgeTransaction: FC = () => {
  const isLoading = useRoleGuard((currentUserRole) => currentUserRole === UserRole.Admin);

  const { badgeHistories } = useFindItemCompletedCharacterStatusesUseCase();
  const { changeDeliveryStateCharacterStatus } = useChangeDeliveryStateCharacterStatusUseCase();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Card className="my-10 mx-3 max-w-4xl">
      <h1 className="text-3xl font-bold">バッジ受渡履歴</h1>
      <span>
        それぞれが使用するキャラクターの４つのきせかえアイテムをすべて集めたユーザーが表示されています。ユーザーのアイコンと同じデザインの缶バッジを手渡してください。
      </span>
      <Card className="bg-[#F0F1F2] shadow-none">
        {badgeHistories?.map((badgeHistory) =>
          badgeHistory ? (
            <BadgeTransactionItem
              key={badgeHistory.id}
              id={badgeHistory.id}
              exchangedItem={badgeHistory.exchangedItem}
              createdAt={badgeHistory.createdAt}
              isDelivered={badgeHistory.isDelivered}
              onSubmit={async () => {
                await changeDeliveryStateCharacterStatus(badgeHistory.id, !badgeHistory.isDelivered);
              }}
              receiver={badgeHistory.receiver}
              className="w-full"
            />
          ) : null,
        ) ?? null}
      </Card>
    </Card>
  );
};
