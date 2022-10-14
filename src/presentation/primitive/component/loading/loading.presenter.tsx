import type { FC } from 'react';
import twMerge from '@/presentation/style/twmerge';

const Loading: FC<{ className?: string }> = ({ className }) => (
  <div className="flex justify-center">
    <div className={twMerge('animate-spin rounded-full border-4 border-pink-500 border-t-transparent', className || 'h-36 aspect-square')} />
  </div>
);

Loading.defaultProps = {
  className: undefined,
};

export default Loading;
