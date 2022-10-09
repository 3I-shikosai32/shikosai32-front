// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { UserItem, UserItemIcon, UserItemBio, UserItemName, UserItemDescription, UserItemTips } from './user-item.component';

type Story = ComponentStoryObj<typeof UserItem>;

const meta: ComponentMeta<typeof UserItem> = {
  component: UserItem,
  args: {
    className: 'bg-white p-4 rounded-base max-w-md',
  },
  argTypes: {
    children: {
      description:
        'これはユーザー情報を表示するためのコンポーネント。したがって、`<UserItemIcon>`、`<UserItemBio>`、`<UserItemName>`、`<UserItemDescription>`、`<UserItemTips>`を子要素・孫要素として指定する。',
      control: { type: 'none' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <UserItem {...args}>
      <UserItemIcon iconUrl="/icons/fox.png" name="ユーザー名" />
      <UserItemBio>
        <UserItemName>ユーザー名</UserItemName>
        <UserItemDescription>ユーザーの説明</UserItemDescription>
      </UserItemBio>
    </UserItem>
  ),
};

export const WithTips: Story = {
  render: (args) => (
    <UserItem {...args}>
      <UserItemIcon iconUrl="/icons/fox.png" name="ユーザー名" />
      <UserItemBio>
        <UserItemName>ユーザー名</UserItemName>
        <UserItemDescription>ユーザーの説明</UserItemDescription>
      </UserItemBio>
      <UserItemTips>ユーザーのヒント</UserItemTips>
    </UserItem>
  ),
};
