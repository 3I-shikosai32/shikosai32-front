import type { FC, ComponentPropsWithoutRef } from 'react';
import type { GameStatusIndicatorProps } from '../game-status-indicator/game-status-indicator.presenter';
import { GameStatusIndicator } from '../game-status-indicator/game-status-indicator.presenter';
import type { DetailedGameAttenders } from '@/model/game/detailed-game-attenders.model';
import { LiveCharacter } from '@/presentation/primitive/component/live-character/live-character.presenter';
import { Separator } from '@/presentation/primitive/component/sepatator/separator.presenter';
import type { SeparatorProps } from '@/presentation/primitive/component/sepatator/separator.presenter';
import twMerge from '@/presentation/style/twmerge';

export type GamePlaygroundProps = ComponentPropsWithoutRef<'div'> & {
  attenders: DetailedGameAttenders;
} & Pick<GameStatusIndicatorProps, 'isAttending' | 'onAttendanceChange' | 'disabled'>;

export const GamePlayground: FC<GamePlaygroundProps> = ({ disabled, attenders, isAttending, onAttendanceChange, children, className, ...props }) => (
  <div
    className={twMerge(
      'h-full w-full flex flex-col lg:flex-row lg:justify-center justify-start items-center gap-8 p-6 pb-12 bg-gradient-to-br gradient-game-xeno text-game-xeno-g2',
      className,
    )}
    {...props}
  >
    <GameStatusIndicator className="w-full max-w-md grow" isAttending={isAttending} onAttendanceChange={onAttendanceChange} disabled={disabled}>
      {attenders
        .map((attender) => ({
          name: attender.name,
          imageUrl: [attender.avatarUrl, ...attender.itemLayerUrls],
        }))
        .map(({ name, imageUrl }) => (
          <LiveCharacter key={name} name={name} images={imageUrl} />
        ))}
    </GameStatusIndicator>
    <div className="flex grow-0 flex-col items-stretch justify-start gap-1 px-4 text-start text-white lg:max-w-sm">{children}</div>
  </div>
);

export type GamePlaygroundTitleProps = ComponentPropsWithoutRef<'h1'>;
export const GamePlaygroundTitle: FC<GamePlaygroundTitleProps> = ({ children, className, ...props }) => (
  <h1 className={twMerge('text-center lg:text-start text-5xl font-pixel my-5 drop-shadow-md shadow-neutral-900', className)} {...props}>
    {children}
  </h1>
);

const MAX_DIFFICULTY = 5;
export type GamePlaygroundDifficultyIndicatorProps = Omit<ComponentPropsWithoutRef<'p'>, 'children'> & {
  difficulty: number;
};
export const GamePlaygroundDifficultyIndicator: FC<GamePlaygroundDifficultyIndicatorProps> = ({ difficulty, className, ...props }) => (
  <p className={twMerge('text-center lg:text-start font-pixel', className)} {...props}>
    難易度: {`${'★'.repeat(Math.max(difficulty, 0))}${'☆'.repeat(Math.max(MAX_DIFFICULTY - difficulty, 0))}`}
  </p>
);

export type GamePlaygroundDescriptionProps = ComponentPropsWithoutRef<'p'>;
export const GamePlaygroundDescription: FC<GamePlaygroundDescriptionProps> = ({ children, className, ...props }) => (
  <p className={twMerge('font-pixel self-center lg:self-stretch', className)} {...props}>
    {children}
  </p>
);

export type GamePlaygroundSeparatorProps = Omit<SeparatorProps, 'orientation'>;
export const GamePlaygroundSeparator: FC<GamePlaygroundSeparatorProps> = ({ className, ...props }) => (
  <Separator className={twMerge('bg-white [&[data-orientation="horizontal"]]:my-8', className)} orientation="horizontal" {...props} />
);
