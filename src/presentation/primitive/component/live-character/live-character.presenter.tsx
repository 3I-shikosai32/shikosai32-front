import { motion, HTMLMotionProps } from 'framer-motion';
import Image from 'next/image';
import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import type { Item } from '@/model/item/item.model';
import type { UserCharacterStatus } from '@/model/user/user-character-status.model';
import twMerge from '@/presentation/style/twmerge';

// 子要素は持てない
export type LiveCharacterProps = ComponentPropsWithRef<'figure'> &
  HTMLMotionProps<'figure'> & {
    name: string;
    images: Array<UserCharacterStatus['avaterUrl'] | Item['layerurl']>;
    displayName?: boolean;
  };

export const LiveCharacter = forwardRef<HTMLElement, LiveCharacterProps>(({ name, images, className, displayName, ...props }, ref) => (
  <motion.figure
    ref={ref}
    transition={{ duration: 1.0, type: 'spring', stiffness: 100, damping: 5 }}
    initial={{ opacity: 0, scale: 1.5, y: -50 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    whileHover={{ y: [null, -8], transition: { duration: 0.5 } }}
    whileTap={{ scale: [null, 1.1], y: [null, -16, 4], transition: { duration: 0.5, repeat: 1, repeatType: 'reverse' } }}
    exit={{ opacity: 0, scale: 0.5, y: 50 }}
    className={twMerge('flex w-32 flex-col items-center justify-center gap-0 text-center font-pixel shadow-neutral-900 drop-shadow-md', className)}
    {...props}
  >
    <motion.div
      transition={{ duration: 1.0, type: 'spring', stiffness: 100, damping: 5 }}
      animate={{
        scale: [null, 1.1],
        y: [null, -8],
        transition: { repeat: Infinity, repeatType: 'reverse', duration: 2.0 },
      }}
      className="flex aspect-square w-full grow-0 items-center justify-center overflow-visible"
    >
      <ol className="grid w-full shrink-0 scale-[200%] grid-cols-1 grid-rows-1">
        {images.map((imageUrl) => (
          <li key={imageUrl} className="relative col-span-full row-span-full">
            {/* キャラクタ画像の解像度 545 x 401, コンテナの横幅に合わせて拡大 `responsive` */}
            <Image
              src={imageUrl}
              className="select-none"
              width={545}
              height={401}
              layout="responsive"
              alt={`ユーザー名: ${name} のキャラクター画像`}
            />
          </li>
        ))}
      </ol>
    </motion.div>
    {displayName && <p className="-mt-2 text-xs">{name}</p>}
  </motion.figure>
));

LiveCharacter.displayName = 'LiveCharacter';

LiveCharacter.defaultProps = {
  displayName: true,
};
