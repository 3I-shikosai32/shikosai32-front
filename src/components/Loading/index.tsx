import type { FC } from 'react';
import twMerge from '@/libs/twmerge';

export type LoadingProps = {
  type?: 'spinner-border' | 'spinner-grow';
  size: number;
  color?: string;
};

const Loading: FC<LoadingProps> = ({ type, size, color }) => (
  <div className="flex justify-center">
    <div className={twMerge('m-5 animate-spin',type,color)} style={{ width: size, height: size, borderRadius: (3 / 8) * size }} />
  </div>
);

Loading.defaultProps = {
  color: 'text-blue-500',
  type: 'spinner-border',
};
export default Loading;
