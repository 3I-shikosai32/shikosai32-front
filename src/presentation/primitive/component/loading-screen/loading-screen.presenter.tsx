import Image from 'next/image';
import type { ComponentPropsWithoutRef, FC } from 'react';
import twMerge from '@/presentation/style/twmerge';

export type LoadingScreenProps = ComponentPropsWithoutRef<'figure'>;

export const LoadingScreen: FC<LoadingScreenProps> = ({ className, ...props }) => (
  <figure className={twMerge('grid max-w-md flex-none select-none grid-cols-1 grid-rows-1', className)} {...props}>
    <div className="relative col-span-full row-span-full">
      <Image src="/heroes/concept.png" className="select-none" width={1176} height={1342} alt="OZ at 3Iのロゴ画像" />
    </div>
    <div className="col-span-full row-span-full flex items-center justify-center">
      <div className="relative z-10 flex flex-row items-center  justify-center gap-4 bg-gradient-to-br from-primary-400/75 to-secondary-400/75 p-6 text-center font-pixel-latin text-white backdrop-blur-md">
        <div className="flex justify-center">
          <div className="aspect-square h-24 animate-spin rounded-full border-4 border-white border-t-transparent" />
        </div>
        Loading...
      </div>
    </div>
  </figure>
);
