// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { GameIndex } from './game-index.page';
import { Game } from '@/model/game/game.model';

type Story = ComponentStoryObj<typeof GameIndex>;

const meta: ComponentMeta<typeof GameIndex> = {
  component: GameIndex,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    attendersDictionary: {
      [Game.CoinDropping]: [
        {
          id: '1',
          iconUrl: '/icons/fox.png',
        },
        {
          id: '2',
          iconUrl: '/icons/pudding.png',
        },
      ],
      [Game.Xeno]: [
        {
          id: '11',
          iconUrl: '/icons/fox.png',
        },
        {
          id: '12',
          iconUrl: '/icons/pudding.png',
        },
      ],
      [Game.IceRaze]: [
        {
          id: '21',
          iconUrl: '/icons/fox.png',
        },
        {
          id: '22',
          iconUrl: '/icons/pudding.png',
        },
      ],
      [Game.Poker]: [
        {
          id: '31',
          iconUrl: '/icons/fox.png',
        },
        {
          id: '32',
          iconUrl: '/icons/pudding.png',
        },
      ],
      [Game.President]: [
        {
          id: '41',
          iconUrl: '/icons/fox.png',
        },
        {
          id: '42',
          iconUrl: '/icons/pudding.png',
        },
      ],
      [Game.WeDidntPlaytest]: [
        {
          id: '51',
          iconUrl: '/icons/fox.png',
        },
        {
          id: '52',
          iconUrl: '/icons/pudding.png',
        },
      ],
    },
  },
  argTypes: {
    attendersDictionary: {
      description: 'ゲームごとに、ゲームに参加しているユーザーたちのアイコンURL`iconUrl`と`id`を指定できる。必須。',
      control: { type: 'object' },
    },
  },
};

export default meta;

export const Default: Story = {};
