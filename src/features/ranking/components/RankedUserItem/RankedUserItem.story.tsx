// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { RankedUserItem } from './index';

type Story = ComponentStoryObj<typeof RankedUserItem>;

const meta: ComponentMeta<typeof RankedUserItem> = {
  component: RankedUserItem,
  args: {
    id: '1',
    name: 'ユーザー名',
    iconUrl: '/icons/fox.png',
    point: 50,
    place: 7,
    className: 'bg-white max-w-sm',
  },
  argTypes: {
    id: {
      description: 'ユーザーのIDを指定する。表示はされないが、内部でコンポーネントの`key`として使用される。',
      control: { type: 'string' },
    },
    name: {
      description: 'ユーザーの名前を指定する。',
      control: { type: 'text' },
    },
    iconUrl: {
      description: 'ユーザーのアイコンのURLを指定する。',
      control: { type: 'text' },
    },
    place: {
      description: 'ユーザーの順位を指定する。',
      control: { type: 'number' },
    },
    point: {
      description: 'ユーザーのポイントを指定する。',
      control: { type: 'number' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
export const FirstPlace: Story = {
  args: {
    place: 1,
  },
};
export const SecondPlace: Story = {
  args: {
    place: 2,
  },
};
export const ThirdPlace: Story = {
  args: {
    place: 3,
  },
};
