// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { IoMdSwap } from 'react-icons/io';
import { TransactionItem } from './index';

type Story = ComponentStoryObj<typeof TransactionItem>;

const meta: ComponentMeta<typeof TransactionItem> = {
  component: TransactionItem,
  args: {
    id: 'this-is-transaction-id-12345',
    isDelivered: false,
    createdAt: new Date(),
    deliveredAt: new Date(),
    user: {
      name: 'ユーザー名',
      iconUrl: '/icons/fox.png',
    },
    className: 'max-w-2xl',
  },
  argTypes: {
    id: {
      description: '対象との交換の取引(`GiftHistory`)のIDを指定する。表示はされないが、内部でコンポーネントの`key`として使用される。',
      control: { type: 'string' },
    },
    isDelivered: {
      description: '対象が受け渡し済みかどうかを指定する。',
      control: { type: 'boolean' },
    },
    createdAt: {
      description: '対象との交換の取引が作成された日時を指定する。',
      control: { type: 'date' },
    },
    deliveredAt: {
      description: '対象が受け渡し済みになった日時を指定する。',
      control: { type: 'date' },
    },
    user: {
      description: '交換の取引を行ったユーザーの情報を指定できる。',
      control: { type: 'object' },
    },
    children: {
      description: '交換される対象の説明をする子要素を指定できる。',
      control: { type: 'none' },
    },
    onSubmit: {
      description:
        '対象との交換の取引を受け渡し済みにする、もしくは取り消すボタンを押したときに、その`id`と新しい状態`isDelivered`とともに呼び出されるイベントハンドラを指定する。',
      control: { type: 'function' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    children: (
      <>
        <IoMdSwap className="text-lg text-neutral-500" />
        交換した対象の名前
      </>
    ),
  },
};

export const OnDelivered: Story = {
  args: {
    isDelivered: true,
  },
};
