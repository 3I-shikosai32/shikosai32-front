// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { UserKickForm } from './user-kick-form.presenter';

type Story = ComponentStoryObj<typeof UserKickForm>;

const meta: ComponentMeta<typeof UserKickForm> = {
  component: UserKickForm,
  args: {
    users: [
      {
        id: 'this-is-user-id-12345',
        name: 'ユーザー名1',
        iconUrl: '/icons/fox.png',
      },
      {
        id: 'this-is-user-id-777777',
        name: 'ユーザー名2',
        iconUrl: '/icons/cat.png',
      },
      {
        id: 'this-is-user-id-99999',
        name: 'ユーザー名3',
        iconUrl: '/icons/tree.png',
      },
    ],
    onSubmit: action('フォームのコールバックが呼ばれました'),
  },
  argTypes: {
    users: {
      description: 'ポイントを入力する必要のあるユーザーの情報`UserBio`の配列を渡す。',
      control: { type: 'object' },
    },
    onKick: {
      description: 'ユーザーをキックするときにそのユーザーの`id`とともに呼び出されるイベントハンドラを指定する。',
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
