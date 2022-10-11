import * as SeparatorPrimitive from '@radix-ui/react-separator';
import type { ComponentPropsWithoutRef, FC } from 'react';
import twMerge from '@/presentation/style/twmerge';

export type SeparatorProps = Omit<ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'asChild' | 'children'>;

export const Separator: FC<SeparatorProps> = ({ className, ...props }) => (
  <SeparatorPrimitive.Root asChild {...props}>
    <hr
      className={twMerge(
        'bg-neutral-200 self-stretch rounded-base block [&[data-orientation="vertical"]]:mx-2 [&[data-orientation="vertical"]]:w-[2px] [&[data-orientation="vertical"]]:h-auto [&[data-orientation="horizontal"]]:my-2 [&[data-orientation="horizontal"]]:w-full [&[data-orientation="horizontal"]]:h-[2px]',
        className,
      )}
    />
  </SeparatorPrimitive.Root>
);
