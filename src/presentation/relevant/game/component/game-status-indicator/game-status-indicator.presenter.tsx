import { motion, AnimatePresence } from 'framer-motion';
import type { FC, ComponentPropsWithoutRef, ReactElement } from 'react';
import { Children } from 'react';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import type { LiveCharacterProps } from '@/presentation/primitive/component/live-character/live-character.presenter';
import twMerge from '@/presentation/style/twmerge';

export type GameStatusIndicatorProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children: Array<ReactElement<LiveCharacterProps>> | ReactElement<LiveCharacterProps>;
  isAttending: boolean;
  onAttendanceChange: (isUserAttending: boolean) => void;
};

export const GameStatusIndicator: FC<GameStatusIndicatorProps> = ({ onAttendanceChange, isAttending, children, className, ...props }) => {
  const attenderCount = Children.toArray(children).length;
  return (
    <div className={twMerge('flex flex-col justify-center items-stretch gap-0 p-0 rounded-base shadow-z16 overflow-hidden', className)} {...props}>
      <div className={twMerge('flex flex-row w-full justify-between items-center gap-4 p-2 px-5 font-pixel bg-gradient-to-r gradient-window')}>
        <p className={twMerge(isAttending && 'text-primary')}>
          {isAttending ? `あなたと他${attenderCount - 1}名が参加中` : `${attenderCount}名のプレイヤーが参加中`}
        </p>
        <Button
          outlined
          className={twMerge('relative z-10', !isAttending && 'text-primary border-primary')}
          onClick={() => onAttendanceChange(!isAttending)}
        >
          {isAttending ? '退出する' : '参加する'}
        </Button>
      </div>
      <motion.div layout className="flex aspect-[4/3] w-full select-none flex-row flex-wrap items-center justify-around bg-white p-4">
        <AnimatePresence>{children}</AnimatePresence>
      </motion.div>
    </div>
  );
};
