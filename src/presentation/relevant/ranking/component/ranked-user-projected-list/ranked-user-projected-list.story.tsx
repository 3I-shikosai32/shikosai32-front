// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { RankedUserProjectedList } from './ranked-user-projected-list.presenter';
import { dummyRankingData } from '@/constant/dummy-ranking-data';

type Story = ComponentStoryObj<typeof RankedUserProjectedList>;

const meta: ComponentMeta<typeof RankedUserProjectedList> = {
  component: RankedUserProjectedList,
  args: {
    users: dummyRankingData.DAY1.TOTAL,
    className: 'w-full h-96',
  },
  argTypes: {
    users: {
      description: 'ユーザーのリストを指定する。',
      control: { type: 'object' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
