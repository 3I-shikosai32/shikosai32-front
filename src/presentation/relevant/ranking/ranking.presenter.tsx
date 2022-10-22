import { isBefore } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { ProjectedCategorizedRanking } from './component/projected-categorized-ranking/projected-categorized-ranking.presenter';
import { RankShareCard } from './component/rank-share-card/rank-share-card.presenter';
import type { RankingData } from '@/model/ranking/ranking-data.model';
import { RankingPeriod } from '@/model/ranking/ranking-period.model';
import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';
import Toggle from '@/presentation/primitive/component/toggle/toggle.presenter';
import twMerge from '@/presentation/style/twmerge';

const rankingPeriodDictionary: Record<RankingPeriod, boolean> = {
  DAY1: false,
  DAY2: true,
};

export type RankingProps = {
  rankingData: RankingData;
  rankedCurrentUserBio?: RankedUserBio;
};

export const Ranking: FC<RankingProps> = ({ rankingData, rankedCurrentUserBio }) => {
  const [currentPeriod, setCurrentPeriod] = useState<RankingPeriod>(RankingPeriod.DAY1);

  useEffect(() => {
    const now = new Date();
    if (isBefore(now, zonedTimeToUtc(new Date(2022, 10, 23, 0, 0, 0), 'Asia/Tokyo'))) {
      setCurrentPeriod(RankingPeriod.DAY1);
    } else {
      setCurrentPeriod(RankingPeriod.DAY2);
    }
  }, [setCurrentPeriod]);

  return (
    <div className="flex flex-col items-center justify-start gap-4 pb-6">
      <div className="m-0 -mb-36 flex w-screen flex-col items-center justify-start gap-6 bg-gradient-to-br p-4 py-12 pb-36 text-center text-white gradient-ranking">
        <h1 className="font-branding text-5xl font-bold">Ranking</h1>
        <p>
          OZに来てくれたみんなの中で、
          <br />
          一番ポイントをあつめたのは一体いったい誰なのか、確かめよう！
        </p>
        <div className="flex flex-row items-center justify-center gap-2">
          <motion.span
            transition={{ duration: 0.1 }}
            layout
            className={twMerge('font-pixel', currentPeriod === RankingPeriod.DAY1 ? 'text-4xl drop-shadow-md shadow-neutral-900' : 'line-through')}
          >
            1日目
          </motion.span>
          <Toggle
            size="mid"
            color="bg-gradient-to-br from-primary-300 to-secondary-300"
            checked={rankingPeriodDictionary[currentPeriod]}
            onChange={(e) => {
              const { checked } = e.target;
              const period = Object.entries(rankingPeriodDictionary).find(([, value]) => value === checked)?.[0] as RankingPeriod;
              setCurrentPeriod(period);
            }}
          />
          <motion.span
            transition={{ duration: 0.1 }}
            layout
            className={twMerge('font-pixel', currentPeriod === RankingPeriod.DAY2 ? 'text-4xl drop-shadow-md shadow-neutral-900' : 'line-through')}
          >
            2日目
          </motion.span>
        </div>
      </div>
      <div className="flex w-full max-w-7xl flex-row flex-wrap items-start justify-center gap-4 px-2">
        <ProjectedCategorizedRanking className="w-full max-w-6xl" categories={rankingData[currentPeriod]} switchInterval={8000} />
        {rankedCurrentUserBio && <RankShareCard {...rankedCurrentUserBio} />}
      </div>
    </div>
  );
};

Ranking.defaultProps = {
  rankedCurrentUserBio: undefined,
};
