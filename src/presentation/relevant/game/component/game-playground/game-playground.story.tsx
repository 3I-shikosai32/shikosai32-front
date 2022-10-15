import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import {
  GamePlayground,
  GamePlaygroundTitle,
  GamePlaygroundDescription,
  GamePlaygroundDifficultyIndicator,
  GamePlaygroundSeparator,
} from './game-playground.presenter';

type Story = ComponentStoryObj<typeof GamePlayground>;

const meta: ComponentMeta<typeof GamePlayground> = {
  component: GamePlayground,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    attenders: [
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
    isAttending: false,
    disabled: false,
    children: (
      <>
        <GamePlaygroundTitle>ゲームの名前</GamePlaygroundTitle>
        <GamePlaygroundDifficultyIndicator difficulty={2} />
        <GamePlaygroundDescription>ゲームの説明です。簡単なとても楽しい４人向けゲームです。</GamePlaygroundDescription>
        <GamePlaygroundSeparator />
        <span className="text-xs">
          そのころわたくしは、モリーオ市の博物局に勤めて居りました。
          十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。殊にそのころ、モリーオ市では競馬場を植物園に拵こしらえ直すというので、その景色のいいまわりにアカシヤを植え込んだ広い地面が、切符売場や信号所の建物のついたまま、わたくしどもの役所の方へま
        </span>
      </>
    ),
  },
  argTypes: {
    attenders: {
      description: '参加者の名前`name`とアバター画像とアイテム画像のURLを含む詳細な情報を指定する。',
    },
    isAttending: {
      description: '現在のユーザーが参加中かどうかを指定する。',
      control: { type: 'boolean' },
    },
    disabled: {
      description: '参加退出ボタンを無効化することができる。',
      control: { type: 'boolean' },
    },
    onAttendanceChange: {
      description: '参加中かどうかが変更されたときに呼び出されるイベントハンドラを指定する。',
      control: { type: 'function' },
    },
    className: {
      description: '背景色を変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
