import type { FC } from 'react';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { HiMusicNote } from 'react-icons/hi';
import { Button, ButtonProps, ButtonIcon } from '@/components/Button';
import { Link } from '@/components/Link';
import { NavigationMenu, NavigationMenuProps, NavigationItem, NavigationTrigger, NavigationContent, NavigationLink } from '@/components/Navigation';
import twMerge from '@/libs/twmerge';

import type { AudioControl } from '@/state/audio/audioControl';
import type { AudioResource } from '@/state/audio/audioResource';

export type AudioControlMenuProps = Pick<ButtonProps, 'className'> & Pick<NavigationMenuProps, 'viewportClassName'>;

export type AudioControlMenuStateProps = Pick<AudioControl, 'isPlaying' | 'setIsPlaying'> & Pick<AudioResource, 'name' | 'composers'>;

export const AudioControlMenu: FC<AudioControlMenuProps & AudioControlMenuStateProps> = ({
  name,
  composers,
  isPlaying,
  setIsPlaying,
  viewportClassName,
  className,
  ...props
}) => (
  <NavigationMenu viewportClassName={twMerge('left-0 justify-start min-w-[24rem]', viewportClassName)}>
    <NavigationItem>
      <NavigationTrigger>
        <Button className={twMerge('p-0 min-h-12 ', className)} ghost circle {...props}>
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
        <div>
          <Button className="text-neutral-500" onClick={() => setIsPlaying(!isPlaying)} circle outlined>
            <ButtonIcon>{isPlaying ? <BsPauseFill /> : <BsPlayFill />}</ButtonIcon>
          </Button>
        </div>
      </NavigationContent>
    </NavigationItem>
  </NavigationMenu>
);
