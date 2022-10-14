import type { ComponentPropsWithoutRef, FC } from 'react';
import twMerge from '@/presentation/style/twmerge';

export type LoadingProps = Pick<ComponentPropsWithoutRef<'div'>, 'className'>;

const Loading: FC<LoadingProps> = ({ className }) => (
  <div className="flex justify-center">
    <div className={twMerge('animate-spin rounded-full border-4 border-pink-500 border-t-transparent', className || 'h-36 aspect-square')} />
  </div>
);

export default Loading;
