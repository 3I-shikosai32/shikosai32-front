import type { MotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { FC } from 'react';
import { useMemo, useState, useCallback } from 'react';
import { MotionRankedUserItem } from '../ranked-user-item/ranked-user-item.presenter';
import type { RankedUserBio } from '@/model/user/ranked-user-bio.model';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import { MotionCard } from '@/presentation/primitive/component/card/card.presenter';
import type { MotionCardProps } from '@/presentation/primitive/component/card/card.presenter';
import twMerge from '@/presentation/style/twmerge';

export type RankedUserListProps = MotionCardProps &
  MotionProps & {
    users: Array<RankedUserBio>;
    minimizedItemCount?: number;
    maximizedItemCount?: number;
  };

export const RankedUserList: FC<RankedUserListProps> = ({ minimizedItemCount, maximizedItemCount, children, className, users, ...props }) => {
  const [shouldShowAll, setShouldShowAll] = useState<boolean>(false);
  const displayedUsers = useMemo(() => {
    if (shouldShowAll) {
      return users.slice(0, maximizedItemCount);
    }
    return users.slice(0, minimizedItemCount);
  }, [shouldShowAll, users, minimizedItemCount, maximizedItemCount]);
  const onButtonClickHandler = useCallback(() => {
    setShouldShowAll((current) => !current);
  }, [setShouldShowAll]);
  return (
    <MotionCard
      transition={{ duration: 0.25 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{ opacity: 0, y: 10 }}
      className={twMerge('flex flex-col justify-between items-stretch p-2 gap-2 overflow-hidden', className)}
      {...props}
      layout
    >
      {children}
      <motion.div layout className="flex h-full shrink flex-col flex-nowrap items-stretch justify-start gap-2 overflow-hidden p-0">
        <AnimatePresence mode="popLayout">
          {displayedUsers.map((user) => (
            <MotionRankedUserItem
              layout
              key={user.id}
              className="max-w-sm flex-none"
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
      </motion.div>
      <div className="flex h-fit flex-none items-center justify-center">
        <Button className="w-1/2 grow-0" onClick={onButtonClickHandler}>
          {shouldShowAll ? '折りたたむ' : 'もっと見る'}
        </Button>
      </div>
    </MotionCard>
  );
};

RankedUserList.defaultProps = {
  minimizedItemCount: 5,
  maximizedItemCount: 50,
};
