import type { FC } from 'react';
import twMerge from '@/libs/twmerge';

const Loading: FC<{ size: number; fat: boolean }> = ({ size, fat }) => (
  <div className="flex justify-center">
    <div className={twMerge('animate-spin rounded-full  border-pink-500 border-t-transparent',fat ? 'border-8':'border-4')} style={{ width: size, height: size }} />
  </div>
);

export default Loading;
