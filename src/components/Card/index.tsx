import { motion } from 'framer-motion';
import type { FC, ComponentPropsWithRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import twMerge from '@/libs/twmerge';

export type CardProps = ComponentPropsWithRef<'div'> & {
  className?: string;
  children?: ReactNode;
};

// `framer-motion`でアニメーションを付加できるようにするため`forwardRef`でrefを受け取れるようにする
// 型推論はできているのに`<HTMLDivElement, CardProps>`で明示的に型ジェネリクスを指定しないとeslint`react/prop-types`エラーになるため指定
export const Card: FC<CardProps> = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={twMerge('rounded-base shadow-z8 bg-white p-4 flex flex-col gap-2', className)} {...props}>
    {children}
  </div>
));

Card.displayName = 'Card';
Card.defaultProps = {
  className: '',
  children: null,
};

// `framer-motion`でアニメーション可能なCardコンポーネント
export const MotionCard = motion(Card);
