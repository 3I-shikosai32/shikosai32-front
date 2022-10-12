import * as PrimitiveLabel from '@radix-ui/react-label';
import type { FC, ComponentPropsWithoutRef, ReactNode } from 'react';
import twMerge from '@/presentation/style/twmerge';

export type LabelProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveLabel.Root>, 'asChild'> & {
  children: ReactNode;
};

export const Label: FC<LabelProps> = ({ className, children, ...props }) => (
  <PrimitiveLabel.Root className={twMerge("text-neutral-900 font-branding [&[data-state='checked']]:font-bold", className)} {...props}>
    {children}
  </PrimitiveLabel.Root>
);
