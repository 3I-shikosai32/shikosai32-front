import { motion, AnimatePresence } from 'framer-motion';
import type { FC, ComponentPropsWithoutRef, ReactElement } from 'react';
import { Children } from 'react';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import type { LiveCharacterProps } from '@/presentation/primitive/component/live-character/live-character.presenter';
import twMerge from '@/presentation/style/twmerge';

export type GameStatusIndicatorProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children: Array<ReactElement<LiveCharacterProps>> | ReactElement<LiveCharacterProps>;
  disabled?: boolean;
  isAttending: boolean;
  onAttendanceChange: (isUserAttending: boolean) => void;
};

export const GameStatusIndicator: FC<GameStatusIndicatorProps> = ({ disabled, onAttendanceChange, isAttending, children, className, ...props }) => {
  const attenderCount = Children.toArray(children).length;
  return (
    <div
      className={twMerge('flex flex-col justify-center items-stretch gap-0 p-0 rounded-base shadow-z16 overflow-hidden text-current', className)}
      {...props}
    >
      <div className={twMerge('flex flex-row gap-2 w-full justify-between items-center p-1 px-4 font-pixel bg-gradient-to-r gradient-window')}>
        <p className={twMerge(isAttending ? 'text-current' : 'text-neutral-900')}>
          {isAttending ? `あなたと他${attenderCount - 1}名が参加中` : `${attenderCount}名のプレイヤーが参加中`}
        </p>
        <Button
          outlined
          disabled={disabled}
          className={twMerge('relative z-10', isAttending ? 'text-neutral-900' : 'text-current border-current')}
          onClick={() => onAttendanceChange(!isAttending)}
        >
          {isAttending ? '退出する' : '参加する'}
        </Button>
      </div>
      <motion.div layout className="flex aspect-[4/3] w-full grow select-none flex-row flex-wrap items-center justify-around bg-white p-4">
        <AnimatePresence>{children}</AnimatePresence>
      </motion.div>
    </div>
  );
};
GameStatusIndicator.defaultProps = {
  disabled: false,
};
