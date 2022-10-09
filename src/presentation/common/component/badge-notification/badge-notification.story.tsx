import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { BadgeNotification } from './badge-notification.component';

type Story = ComponentStoryObj<typeof BadgeNotification>;

const meta: ComponentMeta<typeof BadgeNotification> = {
  component: BadgeNotification,
  args: {
    className: 'max-w-sm',
    isBrief: false,
  },
  argTypes: {
    className: {
      description: 'スタイル上書き用。',
      control: { type: 'text' },
    },
    isBrief: {
      description: '簡易版の表示にするかどうかを指定する。',
      control: { type: 'boolean' },
    },
    isVisible: {
      description: '表示するかどうかを指定する。',
      control: { type: 'boolean' },
    },
    children: {
      description: 'この通知の追加コンテンツとなる子要素を指定できる。e.g. `くわしく`',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const BriefVersion: Story = {
  args: {
    className: 'w-48',
    isBrief: true,
  },
};
