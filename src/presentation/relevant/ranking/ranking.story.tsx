// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Ranking } from './ranking.presenter';
import { dummyRankingData } from '@/constant/dummy-ranking-data';

type Story = ComponentStoryObj<typeof Ranking>;

const meta: ComponentMeta<typeof Ranking> = {
  component: Ranking,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    rankingData: {
      description:
        '日程`RankingPeriod`と、集計カテゴリー`RankingCategory`ごとの順位付きユーザー`RankedUserBio`を持つ、ランキングデータ`RankingData`を指定する。',
      control: { type: 'object' },
    },
  },
  args: {
    rankingData: dummyRankingData,
  },
};

export default meta;

export const Default: Story = {};
