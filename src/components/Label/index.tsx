import * as PrimitiveLabel from '@radix-ui/react-label';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import twMerge from '@/libs/twmerge';

export type LabelProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveLabel.Root>, 'asChild'> & {
  children: ReactNode;
};

export const Label: FC<LabelProps> = ({ className, children, ...props }) => (
  <PrimitiveLabel.Root className={twMerge('text-neutral-700 font-branding font-bold focus:text-neutral-900', className)} {...props}>
    {children}
  </PrimitiveLabel.Root>
);
