// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { RankedUserList } from './ranked-user-list.presenter';
import { dummyRankingData } from '@/constant/dummy-ranking-data';

type Story = ComponentStoryObj<typeof RankedUserList>;

const meta: ComponentMeta<typeof RankedUserList> = {
  component: RankedUserList,
  args: {
    minimizedItemCount: 5,
    maximizedItemCount: 50,
    users: dummyRankingData.DAY1.TOTAL,
    className: 'max-w-sm',
  },
  argTypes: {
    minimizedItemCount: {
      description: '最小化時に表示するユーザー数',
      control: {
        type: 'number',
      },
    },
    maximizedItemCount: {
      description: '最大化時に表示するユーザー数',
      control: {
        type: 'number',
      },
    },
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
