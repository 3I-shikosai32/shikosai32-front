// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { UserInteractiveItem, UserInteractiveItemActionGroup } from './user-interactive-item.presenter';
import { Button } from '@/presentation/common/component/button/button.component';
import {
  UserItem,
  UserItemIcon,
  UserItemBio,
  UserItemName,
  UserItemDescription,
  UserItemTips,
} from '@/presentation/common/component/user-item/user-item.presenter';

type Story = ComponentStoryObj<typeof UserInteractiveItem>;

const meta: ComponentMeta<typeof UserInteractiveItem> = {
  component: UserInteractiveItem,
  args: {
    className: 'bg-white p-4 rounded-base max-w-2xl',
  },
  argTypes: {
    children: {
      description:
        'これはユーザー情報とユーザーに関連する操作が可能なUIを表示するためのコンポーネント。したがって、ユーザー情報を表す`<UserItem>`と操作可能なUIを持つ`<UserInteractiveItemActionGroup>`を子要素として指定する。',
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
    <UserInteractiveItem {...args}>
      <UserItem>
        <UserItemIcon iconUrl="/icons/fox.png" name="ユーザー名" />
        <UserItemBio>
          <UserItemName>ユーザー名</UserItemName>
          <UserItemDescription>ユーザーの説明</UserItemDescription>
        </UserItemBio>
      </UserItem>
      <UserInteractiveItemActionGroup>
        <Button outlined>アクション1</Button>
        <Button>アクション2</Button>
      </UserInteractiveItemActionGroup>
    </UserInteractiveItem>
  ),
};

export const WithNarrowWidth: Story = {
  args: {
    className: 'bg-white p-4 rounded-base max-w-sm',
  },
  ...Default,
};

export const WithTips: Story = {
  render: (args) => (
    <UserInteractiveItem {...args}>
      <UserItem>
        <UserItemIcon iconUrl="/icons/fox.png" name="ユーザー名" />
        <UserItemBio>
          <UserItemName>ユーザー名</UserItemName>
          <UserItemDescription>ユーザーの説明</UserItemDescription>
        </UserItemBio>
        <UserItemTips>ユーザーのヒント</UserItemTips>
      </UserItem>
      <UserInteractiveItemActionGroup>
        <Button outlined>アクション1</Button>
        <Button>アクション2</Button>
      </UserInteractiveItemActionGroup>
    </UserInteractiveItem>
  ),
};

export const WithBoth: Story = {
  args: {
    className: 'bg-white p-4 rounded-base max-w-sm',
  },
  ...WithTips,
};
