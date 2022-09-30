// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { TransactionItem } from './index';

type Story = ComponentStoryObj<typeof TransactionItem>;

const meta: ComponentMeta<typeof TransactionItem> = {
  component: TransactionItem,
  args: {
    id: 'this-is-transaction-id-12345',
    isDelivered: false,
    createdAt: new Date().toTimeString(),
    deliveredAt: new Date().toTimeString(),
    exchangedGift: {
      name: 'ベビースターラーメン',
    },
    user: {
      name: 'ユーザー名',
      iconUrl: '/icons/fox.png',
    },
    className: 'max-w-2xl',
  },
  argTypes: {
    id: {
      description: '景品交換の取引(`GiftHistory`)のIDを指定する。表示はされないが、内部でコンポーネントの`key`として使用される。',
      control: { type: 'string' },
    },
    isDelivered: {
      description: '景品が受け渡し済みかどうかを指定する。',
      control: { type: 'boolean' },
    },
    createdAt: {
      description: '景品交換の取引(`GiftHistory`)が作成された日時を指定する。',
      control: { type: 'date' },
    },
    deliveredAt: {
      description: '景品交換の取引(`GiftHistory`)が受け渡し済みになった日時を指定する。',
      control: { type: 'date' },
    },
    user: {
      description: '景品交換の取引(`GiftHistory`)を行ったユーザーを指定する。',
      control: { type: 'object' },
    },
    exchangedGift: {
      description: '景品交換の取引(`GiftHistory`)で交換された景品を指定する。',
      control: { type: 'object' },
    },
    onSubmit: {
      description:
        '景品交換の取引(`GiftHistory`)を受け渡し済みにする、もしくは取り消すボタンを押したときに、その`id`と新しい状態`isDelivered`とともに呼び出されるイベントハンドラを指定する。',
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
export const OnDelivered: Story = {
  args: {
    isDelivered: true,
  },
};
