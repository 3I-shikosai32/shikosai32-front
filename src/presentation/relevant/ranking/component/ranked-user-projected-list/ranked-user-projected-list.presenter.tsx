import type { MotionProps } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import type { FC } from 'react';
import { MotionRankedUserItem } from '../ranked-user-item/ranked-user-item.presenter';
import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';
import { MotionCard } from '@/presentation/primitive/component/card/card.presenter';
import type { MotionCardProps } from '@/presentation/primitive/component/card/card.presenter';
import twMerge from '@/presentation/style/twmerge';

export type RankedUserProjectedListProps = Omit<MotionCardProps, 'children'> &
  MotionProps & {
    users: Array<RankedUserBio>;
  };

export const RankedUserProjectedList: FC<RankedUserProjectedListProps> = ({ className, users, ...props }) => (
  <MotionCard
    transition={{ duration: 0.25 }}
    initial={{ opacity: 0, x: -50 }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    exit={{ opacity: 0, x: 50 }}
    className={twMerge('flex flex-col flex-wrap justify-center items-stretch p-2 gap-0 overflow-y-hidden overflow-x-scroll', className)}
    {...props}
    layout
  >
    <AnimatePresence>
      {users.map((user) => (
        <MotionRankedUserItem
          key={user.id}
          layout
          className="mr-2 max-w-sm shrink-0"
          {...user}
          transition={{ duration: 0.25 }}
          initial={{ opacity: 0, scale: 0.75, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{ opacity: 0, scale: 0.75, y: 10 }}
        />
      ))}
    </AnimatePresence>
  </MotionCard>
);
