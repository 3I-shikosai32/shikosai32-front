// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Gacha } from './gacha.presenter';

type Story = ComponentStoryObj<typeof Gacha>;

const meta: ComponentMeta<typeof Gacha> = {
  component: Gacha,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    name: 'キャラクターの名前',
    images: [
      '/character/fox/base.png',
      '/character/fox/item1.png',
      '/character/fox/item2.png',
      '/character/fox/item3.png',
      '/character/fox/item4.png',
    ],
    itemIconUrls: ['/icons/fox.png', '/icons/ramen.png', '/icons/ramen.png', '/icons/ramen.png'],
    lootedItemIconUrl: '/icons/ramen.png',
  },
  argTypes: {
    pullableGachaTimes: {
      description: 'ガチャを引ける回数',
      control: {
        type: 'number',
        min: 0,
      },
    },
    name: {
      description: 'キャラクター画像の下に表示される名前を指定できる。',
      control: { type: 'text' },
    },
    images: {
      description: 'キャラクター画像のパスを複数指定できる。配列の添字の大きいものがより優先して上に表示される。',
      control: { type: 'object' },
    },
    itemIconUrls: {
      description: 'アイテムのアイコン画像のパスを複数指定できる。',
      control: { type: 'object' },
    },
    lootedItemIconUrl: {
      description: 'ガチャで手に入れたアイテムのアイコン画像のパスを指定できる。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
