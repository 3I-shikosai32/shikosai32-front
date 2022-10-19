import Image from 'next/image';
import type { FC, ComponentPropsWithoutRef } from 'react';
import twMerge from '@/presentation/style/twmerge';

// 子要素は持てない
export type IconProps = Pick<ComponentPropsWithoutRef<typeof Image>, 'src' | 'className' | 'alt'> & {
  alt?: string;
};

const Icon: FC<IconProps> = ({ className, src, alt }) => (
  <div className={twMerge('relative shrink-0 aspect-square h-12 rounded-full shadow-z16 overflow-hidden bg-white', className)}>
    <Image className="h-full w-full" src={src} alt={alt} layout="fill" objectFit="cover" />
  </div>
);

Icon.defaultProps = {
  alt: 'アイコン画像',
};

export { Icon };
