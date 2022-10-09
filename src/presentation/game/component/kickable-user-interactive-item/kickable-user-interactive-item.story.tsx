// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { KickableUserInteractiveItem } from './kickable-user-interactive-item.component';

type Story = ComponentStoryObj<typeof KickableUserInteractiveItem>;

const meta: ComponentMeta<typeof KickableUserInteractiveItem> = {
  component: KickableUserInteractiveItem,
  args: {
    id: 'this-is-user-id-12345',
    name: 'ユーザー名',
    iconUrl: '/icons/fox.png',
    className: 'bg-white max-w-md',
  },
  argTypes: {
    id: {
      description: 'ユーザーのIDを指定する。確認のためユーザー名とともに表示される。また、内部ではコンポーネントの`key`として使用される。',
      control: { type: 'text' },
    },
    name: {
      description: 'ユーザーの名前を指定する。',
      control: { type: 'text' },
    },
    iconUrl: {
      description: 'ユーザーのアイコンのURLを指定する。',
      control: { type: 'text' },
    },
    onKick: {
      description: 'ユーザーをキックするときにその`id`とともに呼び出されるイベントハンドラを指定する。',
      control: { type: 'none' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
