// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { SignupProgressNotificationModal } from './signup-progress-notification-modal.presenter';

type Story = ComponentStoryObj<typeof SignupProgressNotificationModal>;

const meta: ComponentMeta<typeof SignupProgressNotificationModal> = {
  component: SignupProgressNotificationModal,
  args: {
    open: true,
  },
  argTypes: {
    open: {
      description:
        'このモーダルの開閉状態を指定できる。**開閉を`state`で管理する必要がない場合は、指定しなくてもよい。**その場合でも、`trigger`ボタンとモーダル外クリックによる開閉は可能。',
      control: { type: 'boolean' },
    },
    onOpenChange: {
      description:
        'このモーダルの開閉状態が変更されようとするときに実行されるイベントハンドラ関数を渡すことができる。**開閉を`state`で管理する必要がない場合は、指定しなくてもよい。**その場合でも、`trigger`ボタンとモーダル外クリックによる開閉は可能。',
      control: { type: 'function' },
    },
  },
};

export default meta;

export const Default: Story = {};
