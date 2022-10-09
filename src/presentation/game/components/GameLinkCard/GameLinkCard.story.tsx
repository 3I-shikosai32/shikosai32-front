// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { GameLinkCard } from './index';

type Story = ComponentStoryObj<typeof GameLinkCard>;

const meta: ComponentMeta<typeof GameLinkCard> = {
  component: GameLinkCard,
  args: {
    href: '#',
    children: 'ゲーム名です',
    maxAttenders: 5,
    attenders: [
      {
        id: '1',
        iconUrl: '/icons/fox.png',
      },
      {
        id: '2',
        iconUrl: '/icons/tree.png',
      },
      {
        id: '3',
        iconUrl: '/icons/pudding.png',
      },
    ],
  },
  argTypes: {
    href: {
      description:
        '`next/link`の`<Link>`準拠。リンク先のURL。必須。**このコンポーネントはただのスタイル付きのラッパーなので、この他にも`next/link`の`<Link>`と同じpropsがすべて使用可能。**',
      control: { type: 'text' },
    },
    className: {
      description: 'このカードの大きさと背景色を外部から変えるために公開されている。`max-w-lg` `gradient-game-xeno`などの指定で可。',
      control: { type: 'text' },
    },
    children: {
      description: 'ゲームの名前を指定できる。必須。',
      control: { type: 'text' },
    },
    maxAttenders: {
      description: 'ゲームの最大参加人数を指定できる。必須。',
      control: { type: 'number' },
    },
    attenders: {
      description: 'ゲームに参加しているユーザーたちのアイコンURL`iconUrl`と`id`を指定できる。必須。',
      control: { type: 'none' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const WithFullCapacity: Story = {
  args: {
    attenders: [
      {
        id: '1',
        iconUrl: '/icons/fox.png',
      },
      {
        id: '2',
        iconUrl: '/icons/tree.png',
      },
      {
        id: '3',
        iconUrl: '/icons/pudding.png',
      },
      {
        id: '4',
        iconUrl: '/icons/pudding.png',
      },
      {
        id: '5',
        iconUrl: '/icons/reaper.png',
      },
    ],
  },
};

export const Xeno: Story = {
  args: {
    children: 'XENO',
    className: 'gradient-game-xeno',
  },
};

export const CoinDrop: Story = {
  args: {
    children: '水中コイン落とし',
    className: 'gradient-game-coindrop',
  },
};

export const IceRaze: Story = {
  args: {
    children: 'ICE RAZE',
    className: 'gradient-game-iceraze',
  },
};

export const President: Story = {
  args: {
    children: '大富豪',
    className: 'gradient-game-president',
  },
};

export const Poker: Story = {
  args: {
    children: 'ポーカー',
    className: 'gradient-game-poker',
  },
};

export const WeDidntPlayTest: Story = {
  args: {
    children: (
      <span className="text-2xl">
        テストプレイなんて
        <br />
        してないよ
      </span>
    ),
    className: 'gradient-game-playtest',
  },
};
