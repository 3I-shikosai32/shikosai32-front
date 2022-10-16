// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { GiftIndex } from './gift-index.presenter';

type Story = ComponentStoryObj<typeof GiftIndex>;

const meta: ComponentMeta<typeof GiftIndex> = {
  component: GiftIndex,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    consumablePoint: 68,
    gifts: [
      {
        id: 'this-is-gift-id-11111',
        name: 'ベビースターラーメン',
        iconUrl: '/icons/ramen.png',
        price: 30,
        remaining: 10,
      },
      {
        id: 'this-is-gift-id-22222',
        name: 'ベビースターラーメン2',
        iconUrl: '/icons/ramen.png',
        price: 20,
        remaining: 10,
      },
      {
        id: 'this-is-gift-id-33333',
        name: 'ベビースターラーメン3',
        iconUrl: '/icons/ramen.png',
        price: 15,
        remaining: 10,
      },
      {
        id: 'this-is-gift-id-4444',
        name: 'ベビースターラーメン4',
        iconUrl: '/icons/ramen.png',
        price: 12,
        remaining: 10,
      },
    ],
    onExchange: action('onExchange'),
  },
  argTypes: {
    consumablePoint: {
      description:
        'ユーザーが消費できるポイントを指定する。`gifts`で与えられたそれぞれの景品ごとの情報`price`と`remaining`とともに、交換可能な景品の数を計算するために使われる。',
      control: { type: 'number' },
    },
    gifts: {
      description: '表示する景品を指定する。',
      control: { type: 'object' },
    },
    onExchange: {
      description: '景品の交換が求められたときに呼び出されるイベントハンドラを指定する。交換が希望された景品の`id`とその数`amount`を受け取る。`',
      control: { type: 'number' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const ForNotLoggedInUser: Story = {
  args: {
    consumablePoint: null,
    isInteractive: false,
  },
};

export const GiftsNotFound: Story = {
  args: {
    gifts: [],
  },
};

export const Loading: Story = {
  args: {
    gifts: undefined,
  },
};
