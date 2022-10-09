// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { BadgeTransactionItem } from './index';
import { Character } from '@/model';

type Story = ComponentStoryObj<typeof BadgeTransactionItem>;

const meta: ComponentMeta<typeof BadgeTransactionItem> = {
  component: BadgeTransactionItem,
  args: {
    id: 'this-is-transaction-id-12345',
    isDelivered: false,
    createdAt: new Date(),
    deliveredAt: new Date(),
    receiver: {
      id: 'this-is-user-id-12345',
      name: 'ユーザー名',
      iconUrl: '/icons/fox.png',
    },
    exchangedItem: Character.Fox,
    className: 'max-w-3xl',
  },
  argTypes: {
    id: {
      description: '缶バッジとの交換の取引(`GiftHistory`)のIDを指定する。表示はされないが、内部でコンポーネントの`key`として使用される。',
      control: { type: 'string' },
    },
    isDelivered: {
      description: '缶バッジが受け渡し済みかどうかを指定する。',
      control: { type: 'boolean' },
    },
    createdAt: {
      description: '缶バッジとの交換の取引が作成された日時を指定する。',
      control: { type: 'date' },
    },
    deliveredAt: {
      description: '缶バッジが受け渡し済みになった日時を指定する。',
      control: { type: 'date' },
    },
    receiver: {
      description: '交換の取引を行ったユーザーの情報を指定できる。',
      control: { type: 'object' },
    },
    exchangedItem: {
      description: '交換される缶バッジのキャラクターの種類を指定できる。省略された場合、缶バッジの詳細は表示されない。',
      control: { type: 'select', options: [undefined, ...Object.values(Character)] },
    },
    onSubmit: {
      description:
        '対象との缶バッジの取引を受け渡し済みにする、もしくは取り消すボタンを押したときに、その`id`と新しい状態`isDelivered`とともに呼び出されるイベントハンドラを指定する。',
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
