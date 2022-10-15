import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { GameStatusIndicator } from './game-status-indicator.presenter';
import { LiveCharacter } from '@/presentation/primitive/component/live-character/live-character.presenter';

type Story = ComponentStoryObj<typeof GameStatusIndicator>;

const meta: ComponentMeta<typeof GameStatusIndicator> = {
  component: GameStatusIndicator,
  args: {
    isAttending: false,
    className: 'w-96 max-w-sm text-primary',
    children: (
      <>
        <LiveCharacter
          name="ユーザー1"
          images={[
            '/character/fox/base.png',
            '/character/fox/item1.png',
            '/character/fox/item2.png',
            '/character/fox/item3.png',
            '/character/fox/item4.png',
          ]}
        />
        <LiveCharacter name="ユーザー2" images={['/character/fox/base.png']} />
      </>
    ),
  },
  argTypes: {
    isAttending: {
      description: '現在のユーザーが参加中かどうかを指定する。',
      control: { type: 'boolean' },
    },
    onAttendanceChange: {
      description: '参加中かどうかが変更されたときに呼び出されるイベントハンドラを指定する。',
      control: { type: 'function' },
    },
    disabled: {
      description: '参加退出ボタンを無効化することができる。',
      control: { type: 'boolean' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const Attending: Story = {
  args: {
    isAttending: true,
  },
};

export const WithManyAttenders: Story = {
  args: {
    children: (
      <>
        <LiveCharacter
          name="ユーザー1"
          images={[
            '/character/fox/base.png',
            '/character/fox/item1.png',
            '/character/fox/item2.png',
            '/character/fox/item3.png',
            '/character/fox/item4.png',
          ]}
        />
        <LiveCharacter name="ユーザー2" images={['/character/fox/base.png']} />
        <LiveCharacter
          name="ユーザー3"
          images={[
            '/character/fox/base.png',
            '/character/fox/item1.png',
            '/character/fox/item2.png',
            '/character/fox/item3.png',
            '/character/fox/item4.png',
          ]}
        />
        <LiveCharacter name="ユーザー4" images={['/character/fox/base.png']} />
        <LiveCharacter
          name="ユーザー5"
          images={[
            '/character/fox/base.png',
            '/character/fox/item1.png',
            '/character/fox/item2.png',
            '/character/fox/item3.png',
            '/character/fox/item4.png',
          ]}
        />
      </>
    ),
  },
};
