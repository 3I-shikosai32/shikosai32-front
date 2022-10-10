import type { FC } from 'react';
import { Card, CardProps } from '@/presentation/common/component/card/card.component';
import twMerge from '@/presentation/style/twmerge';

export type BadgeNotificationProps = CardProps & {
  isBrief?: boolean;
  isVisible?: boolean;
};

// CSSでは、`border`の色に`linear-gradient`を使用するためのAPIがないため、入れ子の`<div>`で表現する
export const BadgeNotification: FC<BadgeNotificationProps> = ({ className, isBrief, isVisible, children, ...props }) =>
  isVisible ? (
    <Card
      className={twMerge('p-[2px] bg-gradient-to-br gradient-primary items-center text-center text-primary-700 font-pixel', className)}
      {...props}
    >
      <div
        className={twMerge(
          'flex w-full flex-col rounded-base bg-gradient-to-br from-white to-primary-100 p-4',
          !isBrief && 'gap-2',
          isBrief && 'p-2',
        )}
      >
        <p className={twMerge('text-neutral-900', !isBrief && 'text-4xl')}>🥳おめでとう！</p>
        {isBrief ? (
          <>
            あなたは、特別に缶バッジを受け取ることができます！
            <br />
          </>
        ) : (
          <>
            ４つのきせかえアイテムを集めたあなたは、特別に缶バッジ受け取ることができます。
            <br />
            景品受取所でこの画面を見せて、
            <br />
            缶バッジをもらおう！
          </>
        )}
        {children}
      </div>
    </Card>
  ) : null;
BadgeNotification.defaultProps = {
  isBrief: false,
  isVisible: true,
};
