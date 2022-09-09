import * as PrimitiveRadioGroup from '@radix-ui/react-radio-group';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import twMerge from '@/libs/twmerge';

export type RadioIndicatorProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveRadioGroup.Indicator>, 'asChild' | 'children'> & {
  children: ReactNode;
};

export const RadioIndicator: FC<RadioIndicatorProps> = ({ children, ...props }) => (
  <PrimitiveRadioGroup.Indicator asChild {...props}>
    {children}
  </PrimitiveRadioGroup.Indicator>
);

export type DefaultRadioButtonAppearanceProps = ComponentPropsWithoutRef<'div'>;

export const DefaultRadioButtonAppearance: FC<DefaultRadioButtonAppearanceProps> = (props) => (
  <div className="m-0 flex aspect-square h-6 items-center justify-center rounded-full bg-neutral-100 p-2 shadow-z16" {...props}>
    <RadioIndicator>
      <div className="aspect-square h-full rounded-full bg-success-700" />
    </RadioIndicator>
  </div>
);

export type RadioItemProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveRadioGroup.Item>, 'asChild' | 'children'> & {
  children?: ReactNode;
};

export const RadioItem: FC<RadioItemProps> = ({ className, children, ...props }) => (
  <PrimitiveRadioGroup.Item asChild {...props}>
    {children}
  </PrimitiveRadioGroup.Item>
);

RadioItem.defaultProps = {
  children: <DefaultRadioButtonAppearance />,
};

export type RadioGroupProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveRadioGroup.Root>, 'asChild' | 'children'> & {
  children: Array<ReactElement<RadioItemProps>> | ReactElement<RadioItemProps>;
};

export const RadioGroup: FC<RadioGroupProps> = ({ children, ...props }) => <PrimitiveRadioGroup.Root {...props}>{children}</PrimitiveRadioGroup.Root>;
