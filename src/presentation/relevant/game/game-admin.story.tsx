// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  GamePlaygroundTitle,
  GamePlaygroundDescription,
  GamePlaygroundDifficultyIndicator,
} from './component/game-playground/game-playground.presenter';
import { GameAdmin } from './game-admin.presenter';

type Story = ComponentStoryObj<typeof GameAdmin>;

const meta: ComponentMeta<typeof GameAdmin> = {
  component: GameAdmin,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    detailedGameAttenders: {
      description: '詳細なゲーム参加者の情報',
      control: { type: 'object' },
    },
    isLoading: {
      description: 'ローディング中かどうか',
      control: { type: 'boolean' },
    },
    onKick: {
      description: 'ユーザーをキックするときのコールバック',
      control: { type: 'function' },
    },
    onSubmit: {
      description: 'ポイントを送信するときのコールバック',
      control: { type: 'function' },
    },
  },
  args: {
    isLoading: false,
    detailedGameAttenders: [
      {
        id: 'this-is-user-id-11111',
        name: 'ユーザー1',
        iconUrl: '/icons/fox.png',
        avatarUrl: '/character/fox/base.png',
        itemLayerUrls: ['/character/fox/item1.png', '/character/fox/item2.png', '/character/fox/item3.png', '/character/fox/item4.png'],
      },
      {
        id: 'this-is-user-id-22222',
        name: 'ユーザー2',
        iconUrl: '/icons/fox.png',
        avatarUrl: '/character/fox/base.png',
        itemLayerUrls: [],
      },
      {
        id: 'this-is-user-id-33333',
        name: 'ユーザー3',
        iconUrl: '/icons/fox.png',
        avatarUrl: '/character/fox/base.png',
        itemLayerUrls: ['/character/fox/item3.png', '/character/fox/item4.png'],
      },
    ],
    children: (
      <>
        <GamePlaygroundTitle>ゲームの名前</GamePlaygroundTitle>
        <GamePlaygroundDifficultyIndicator difficulty={2} />
        <GamePlaygroundDescription>
          ゲームの説明です。簡単なとても楽しい４人向けゲームです。
          <br />
          簡単なとても楽しい４人向けゲームです。
        </GamePlaygroundDescription>
      </>
    ),
  },
};

export default meta;

export const Default: Story = {};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
