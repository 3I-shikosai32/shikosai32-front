// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { ProjectedCategorizedRanking } from './projected-categorized-ranking.presenter';
import { dummyRankingData } from '@/constant/dummy-ranking-data';

type Story = ComponentStoryObj<typeof ProjectedCategorizedRanking>;

const meta: ComponentMeta<typeof ProjectedCategorizedRanking> = {
  component: ProjectedCategorizedRanking,
  argTypes: {
    categories: {
      description: '集計カテゴリー`RankingCategory`ごとの順位付きユーザー`RankedUserBio`の配列を指定する。',
      control: { type: 'object' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
    children: {
      description: 'セレクターとランキング表示の間に挿入される子要素を指定できる。',
      control: { type: 'none' },
    },
    switchInterval: {
      description: 'ランキングの切り替え間隔ミリ秒単位でを指定する。',
      control: { type: 'number' },
    },
  },

  args: {
    className: 'max-w-6xl',
    switchInterval: 2000,
    categories: dummyRankingData.DAY1,
  },
};

export default meta;

export const Default: Story = {};
