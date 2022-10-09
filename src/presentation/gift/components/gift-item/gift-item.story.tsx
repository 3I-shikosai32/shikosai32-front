// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { STOCK_INDICATE_AMOUNT } from './hook/use-gift-item-amount.hook';
import { GiftItem } from './gift-item.component';

type Story = ComponentStoryObj<typeof GiftItem>;

const meta: ComponentMeta<typeof GiftItem> = {
  component: GiftItem,
  args: {
    consumablePoint: 120,
    name: 'ベビースターラーメン',
    iconUrl: '/icons/ramen.png',
    price: 30,
    remaining: 10,
    onExchange: action('onExchange'),
    className: 'bg-white',
  },
  argTypes: {
    consumablePoint: {
      description: 'ユーザーが消費できるポイントを指定する。`price`と`remaining`とともに、交換可能な景品の数を計算するために使われる。',
      control: { type: 'number' },
    },
    name: {
      description: '景品の表示名を指定する。',
      control: { type: 'text' },
    },
    iconUrl: {
      description: '景品の画像のURLを指定する。',
      control: { type: 'text' },
    },
    price: {
      description: '景品の価格を指定する。',
      control: { type: 'number' },
    },
    remaining: {
      description: '景品の残り在庫数を指定する。',
      control: { type: 'number' },
    },
    onExchange: {
      description: '景品の交換が求められたときに呼び出されるイベントハンドラを指定する。唯一の引数として、希望された数`amount`を受け取る。`',
      control: { type: 'number' },
    },
    className: {
      description: 'スタイル上書き用。この要素の横幅拡大にのみ使用することが望ましい。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const WithFewStock: Story = {
  args: {
    remaining: STOCK_INDICATE_AMOUNT,
  },
};

export const OutOfStock: Story = {
  args: {
    remaining: 0,
  },
};

export const OutOfPoints: Story = {
  args: {
    consumablePoint: 0,
  },
};
