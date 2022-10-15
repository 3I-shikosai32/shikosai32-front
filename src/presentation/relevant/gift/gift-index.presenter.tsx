import type { FC } from 'react';
import { GiftItem } from './component/gift-item/gift-item.presenter';
import type { GiftItemProps } from './component/gift-item/gift-item.presenter';

import type { Gift } from '@/model/gift/gift.model';
import { Card } from '@/presentation/primitive/component/card/card.presenter';

export type GiftIndexProps = {
  gifts: Array<Pick<Gift, 'id' | 'iconUrl' | 'name' | 'price' | 'remaining'>> | undefined | null;
  consumablePoint?: number | undefined | null;
  onExchange: GiftItemProps['onExchange'];
  isInteractive?: GiftItemProps['isInteractive'];
};

const resolvePlaceholderMessage = (gifts: GiftIndexProps['gifts']): string => {
  if (gifts === undefined) {
    return '読み込み中です...';
  }
  if (gifts === null) {
    return '読み込み中にエラーが発生しました';
  }
  if (gifts.length === 0) {
    return '景品がみつかりませんでした';
  }
  return '';
};

export const GiftIndex: FC<GiftIndexProps> = ({ isInteractive, gifts, consumablePoint, onExchange }) => (
  <div className="flex flex-col items-center justify-start gap-4">
    <div className="m-0 -mb-20 flex w-screen flex-col items-center justify-start gap-2 bg-gradient-to-br p-4 py-12 pb-24 text-center text-white gradient-exchange">
      <h1 className="mb-4 font-branding text-5xl font-bold">Exchange</h1>
      {consumablePoint !== undefined && consumablePoint !== null ? (
        <>
          <p>
            あなたが獲得したポイントと、
            <br />
            景品を交換しましょう！
          </p>
          <span className="inline-flex items-baseline justify-center gap-1 font-branding font-bold">
            <h2 className="text-8xl">{consumablePoint}</h2>
            Pt
          </span>
          <span className="text-xs">が使用可能です</span>
        </>
      ) : (
        <>
          <p>
            ゲームに参加してもらえるポイントを使って、
            <br />
            現実世界の景品と交換することができます！
            <br />
          </p>
          <div className="m-2 rounded-base border-2 border-white p-4 font-pixel">
            まだOZに参加してない？
            <br />
            今すぐ登録・ログインして、
            <br />
            アソビの頂点を目指そう！
            <br />
          </div>
        </>
      )}
    </div>
    <Card className="mx-4 grid grid-flow-row grid-cols-1 justify-center gap-4 gap-x-8 p-2 lg:grid-cols-2">
      {gifts &&
        gifts.map((gift) => (
          <GiftItem
            className="w-80"
            key={gift.id}
            {...gift}
            consumablePoint={consumablePoint || 0}
            onExchange={onExchange}
            isInteractive={isInteractive}
          />
        ))}
      {(!gifts || gifts === null || gifts.length === 0) && (
        <GiftItem
          id="0"
          className="col-span-full"
          remaining={0}
          price={1}
          name={resolvePlaceholderMessage(gifts)}
          consumablePoint={1}
          isDummy
          onExchange={() => {}}
        />
      )}
    </Card>
  </div>
);

GiftIndex.defaultProps = {
  consumablePoint: undefined,
  isInteractive: true,
};
