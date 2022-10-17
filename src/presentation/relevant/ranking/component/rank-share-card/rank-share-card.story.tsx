// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { RankShareCard } from './rank-share-card.presenter';

type Story = ComponentStoryObj<typeof RankShareCard>;

const meta: ComponentMeta<typeof RankShareCard> = {
  component: RankShareCard,
  args: {
    id: '1',
    name: 'じぶんのユーザー名',
    iconUrl: '/icons/fox.png',
    point: 123,
    place: 1,
    className: 'w-fit',
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
    point: 96,
  },
};
export const ThirdPlace: Story = {
  args: {
    place: 3,
    point: 80,
  },
};
export const OrdinaryPlace: Story = {
  args: {
    place: 27,
    point: 39,
  },
};
