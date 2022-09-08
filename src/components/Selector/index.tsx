import * as Select from '@radix-ui/react-select';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import { Button } from '@/components/Button';
import { MotionCard } from '@/components/Card';
import twMerge from '@/libs/twmerge';

export type SelectorTriggerProps = Omit<ComponentPropsWithoutRef<typeof Select.Trigger>, 'asChild'> &
  Pick<ComponentPropsWithoutRef<typeof Select.Value>, 'placeholder'> & {
    children?: ReactNode;
  };

export const SelectorTrigger: FC<SelectorTriggerProps> = ({ placeholder, className, children, ...props }) => (
  <Select.Trigger asChild {...props}>
    <Button className={twMerge('[&[data-placeholder]]:text-neutral-500', className)} outlined>
      {children}
      <Select.Value {...{ placeholder }} />
      <Select.Icon />
    </Button>
  </Select.Trigger>
);

SelectorTrigger.defaultProps = {
  children: '',
};

export type SelectorItemProps = Omit<ComponentPropsWithoutRef<typeof Select.Item>, 'asChild'> & {
  displayName: string;
  children: ReactNode;
};

export const SelectorItem: FC<SelectorItemProps> = ({ children, displayName, ...props }) => (
  <Select.Item className="relative flex flex-row items-center justify-center gap-2 [&[data-disabled]]:text-neutral-500" {...props}>
    {children}
    <Select.ItemText>{displayName}</Select.ItemText>
    <Select.ItemIndicator className="absolute left-0 flex aspect-square h-4 items-center justify-center text-success-700">x</Select.ItemIndicator>
  </Select.Item>
);

export type SelectorGroupProps = Omit<ComponentPropsWithoutRef<typeof Select.Group>, 'asChild'> & {
  label: string;
  children: Array<ReactElement<SelectorItemProps>>;
};

export const SelectorGroup: FC<SelectorGroupProps> = ({ children, label, ...props }) => (
  <Select.Group className="flex flex-col gap-2" {...props}>
    <Select.Label>{label}</Select.Label>
    {children}
  </Select.Group>
);

export type SelectorSeparatorProps = Record<string, never>;

export const SelectorSeparator: FC = () => <Select.Separator className="my-2 h-px bg-neutral-300" />;

export type SelectorContentProps = Omit<ComponentPropsWithoutRef<typeof Select.Content>, 'asChild'> & {
  children:
    | Array<ReactElement<SelectorGroupProps> | ReactElement<SelectorItemProps> | ReactElement<SelectorSeparatorProps>>
    | ReactElement<SelectorGroupProps>
    | ReactElement<SelectorItemProps>;
};

export const SelectorContent: FC<SelectorContentProps> = ({ children, ...props }) => (
  <Select.Content asChild {...props}>
    <MotionCard initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 1.0 }} exit={{ opacity: 0, scale: 0.8 }}>
      <Select.ScrollUpButton className="flex h-4 cursor-default items-center justify-center text-neutral-500" />
      <Select.Viewport>{children}</Select.Viewport>
      <Select.ScrollDownButton className="flex h-4 cursor-default items-center justify-center text-neutral-500" />
    </MotionCard>
  </Select.Content>
);

export type SelectorProps = Omit<ComponentPropsWithoutRef<typeof Select.Root>, 'asChild' | 'children' | 'open' | 'onOpenChange'> & {
  trigger?: ReactElement<SelectorTriggerProps>;
  children: ReactElement<SelectorContentProps>;
};

export const Selector: FC<SelectorProps> = ({ trigger, children, ...props }) => (
  <Select.Root {...props}>
    {trigger}
    <Select.Portal />
  </Select.Root>
);

Selector.defaultProps = {
  trigger: <SelectorTrigger />,
};
