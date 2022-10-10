import type { FC } from 'react';
import { useMemo } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiMusicNote } from 'react-icons/hi';
import { formatDuration } from './format-duration';
import type { AudioControl } from '@/model/audio/audio-control.model';
import type { AudioResource } from '@/model/audio/audio-resource.model';
import { Button, ButtonProps, ButtonIcon } from '@/presentation/common/component/button/button.component';
import { Link } from '@/presentation/common/component/link/link.component';
import {
  NavigationMenu,
  NavigationMenuProps,
  NavigationItem,
  NavigationTrigger,
  NavigationContent,
  NavigationLink,
} from '@/presentation/common/component/navigation/navigation.component';

import twMerge from '@/presentation/common/twmerge';

export type AudioControlMenuProps = Pick<ButtonProps, 'className'> &
  Pick<NavigationMenuProps, 'viewportClassName'> &
  Pick<AudioResource, 'name' | 'composers'> &
  Pick<AudioControl, 'isPlaying' | 'duration' | 'currentTime'> & {
    onPlay: () => void;
    onPause: () => void;
  };

export const AudioControlMenu: FC<AudioControlMenuProps> = ({
  name,
  composers,
  isPlaying,
  duration,
  currentTime,
  onPlay,
  onPause,
  viewportClassName,
  className,
  ...props
}) => {
  const formattedTimeDisplay = useMemo(() => `${formatDuration(currentTime)} / ${formatDuration(duration)}`, [currentTime, duration]);
  return (
    <NavigationMenu viewportClassName={twMerge('left-0 justify-start min-w-[24rem]', viewportClassName)}>
      <NavigationItem>
        <NavigationTrigger>
          <Button className={twMerge('p-0 min-h-12 ', className)} ghost circle aria-label="音楽プレイヤーを開く" {...props}>
            {/* TODO: ここに音楽の波形に合わせたスペクトラムを挿入する */}
            <ButtonIcon>
              <HiMusicNote />
            </ButtonIcon>
          </Button>
        </NavigationTrigger>
        <NavigationContent className="w-auto items-center gap-2 p-6">
          <div className={twMerge('flex flex-row items-baseline justify-between gap-4', composers.length > 1 && 'items-center')}>
            <h1 className="font-branding text-3xl font-bold">{name}</h1>
            <div className="flex flex-col-reverse items-start justify-start gap-0">
              {composers.map((composer) => (
                <NavigationLink key={composer.name}>
                  <Link className="font-normal text-neutral-500" href={composer.social || '#'}>
                    {composer.name}
                  </Link>
                </NavigationLink>
              ))}
            </div>
          </div>
          <p className="text-xs text-neutral-500">{formattedTimeDisplay}</p>
          <div>
            <Button
              className="text-neutral-500"
              onClick={() => {
                if (isPlaying) {
                  onPause();
                } else {
                  onPlay();
                }
              }}
              circle
              outlined
            >
              <ButtonIcon>{isPlaying ? <BsPauseFill /> : <BsPlayFill />}</ButtonIcon>
            </Button>
          </div>
        </NavigationContent>
      </NavigationItem>
    </NavigationMenu>
  );
};