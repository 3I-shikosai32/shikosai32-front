import * as PrimitiveRadioGroup from '@radix-ui/react-radio-group';
import { motion } from 'framer-motion';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import twMerge from '@/presentation/style/twmerge';

export type RadioIndicatorProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveRadioGroup.Indicator>, 'asChild'>;

export const RadioIndicator: FC<RadioIndicatorProps> = ({ className, children, ...props }) => (
  <PrimitiveRadioGroup.Indicator
    className={twMerge('aspect-square h-full rounded-full bg-gradient-to-br shadow-z4 gradient-primary', className)}
    {...props}
  >
    {children}
  </PrimitiveRadioGroup.Indicator>
);

const MotionPrimitiveRadioGroupItem = motion(PrimitiveRadioGroup.Item);

export type RadioItemProps = Omit<ComponentPropsWithoutRef<typeof MotionPrimitiveRadioGroupItem>, 'asChild'> & {
  children?: ReactNode;
};

export const RadioItem: FC<RadioItemProps> = ({ className, children, ...props }) => (
  <MotionPrimitiveRadioGroupItem
    whileHover={{
      scale: props.disabled ? 1.0 : 1.05,
      transition: { duration: 0.25 },
    }}
    whileTap={{ scale: props.disabled ? 1.0 : 0.95 }}
    className={twMerge(
      "m-0 flex aspect-square h-6 items-center justify-center rounded-full bg-white p-1.5 disabled:contrast-50 shadow-z16 ring-2 ring-transparent [&[data-state='checked']]:ring-primary",
      className,
    )}
    {...props}
  >
    {children}
  </MotionPrimitiveRadioGroupItem>
);

RadioItem.defaultProps = {
  children: <RadioIndicator />,
};

export type RadioGroupProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveRadioGroup.Root>, 'asChild' | 'children'> & {
  children: Array<ReactElement<RadioItemProps>> | ReactElement<RadioItemProps>;
};

export const RadioGroup: FC<RadioGroupProps> = ({ className, children, ...props }) => (
  <PrimitiveRadioGroup.Root className={twMerge('flex flex-col items-start gap-4 w-fit', className)} {...props}>
    {children}
  </PrimitiveRadioGroup.Root>
);
