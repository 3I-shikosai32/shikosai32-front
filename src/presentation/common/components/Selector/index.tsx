import * as Select from '@radix-ui/react-select';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { MdCheck } from 'react-icons/md';
import { MotionCard } from '@/components/Card';
import { Separator } from '@/components/Separator';
import twMerge from '@/utils/twmerge';

export type SelectorTriggerProps = Omit<ComponentPropsWithoutRef<typeof Select.Trigger>, 'asChild'> &
  Required<Pick<ComponentPropsWithoutRef<typeof Select.Value>, 'placeholder'>> & {
    children?: ReactNode;
  };

export const SelectorTrigger: FC<SelectorTriggerProps> = ({ placeholder, className, children, ...props }) => (
  <Select.Trigger asChild {...props}>
    <div
      className={twMerge(
        'flex w-fit min-w-[8rem] flex-row items-center justify-center gap-2 rounded-base px-4 py-2 font-branding shadow-z8 bg-white text-neutral-900 text-base font-bold  disabled:contrast-50 [&[data-placeholder]]:text-neutral-400',
        className,
      )}
    >
      {children}
      <Select.Value {...{ placeholder }} />
      <Select.Icon asChild>
        <FaChevronDown className="text-neutral-400" />
      </Select.Icon>
    </div>
  </Select.Trigger>
);

SelectorTrigger.defaultProps = {
  children: '',
};

export type SelectorItemProps = Omit<ComponentPropsWithoutRef<typeof Select.Item>, 'asChild'> & {
  children?: ReactNode;
};

export const SelectorItem: FC<SelectorItemProps> = ({ children, ...props }) => (
  <Select.Item
    className="relative flex flex-row items-center gap-2 overflow-visible rounded-base p-1 pl-8 pr-2 font-branding outline-none ring-transparent [&[data-disabled]]:text-neutral-300 [&[data-state='checked']]:bg-primary-100 [&[data-state='checked']]:text-primary-900 [&[data-highlighted]]:bg-primary-100"
    {...props}
  >
    <Select.ItemText asChild>
      <span className="flex flex-row items-center justify-start gap-2">{children}</span>
    </Select.ItemText>
    <Select.ItemIndicator className="absolute left-2 flex aspect-square h-4 items-center justify-center text-primary">
      <MdCheck />
    </Select.ItemIndicator>
  </Select.Item>
);

SelectorItem.defaultProps = {
  children: null,
};

export type SelectorGroupProps = Omit<ComponentPropsWithoutRef<typeof Select.Group>, 'asChild'> & {
  label: string;
  children: Array<ReactElement<SelectorItemProps>> | ReactElement<SelectorItemProps>;
};

export const SelectorGroup: FC<SelectorGroupProps> = ({ children, label, ...props }) => (
  <Select.Group className="flex flex-col gap-0" {...props}>
    <Select.Label className="text-xs text-neutral-400">{label}</Select.Label>
    {children}
  </Select.Group>
);

export type SelectorSeparatorProps = Omit<ComponentPropsWithoutRef<typeof Select.Separator>, 'asChild'>;

export const SelectorSeparator: FC = (props) => (
  <Select.Separator asChild {...props}>
    <Separator orientation="horizontal" />
  </Select.Separator>
);

export type SelectorProps = Omit<ComponentPropsWithoutRef<typeof Select.Root>, 'asChild' | 'children' | 'open' | 'defaultOpen' | 'onOpenChange'> & {
  trigger?: ReactElement<SelectorTriggerProps>;
  children:
    | Array<ReactElement<SelectorGroupProps> | ReactElement<SelectorItemProps> | ReactElement<SelectorSeparatorProps>>
    | ReactElement<SelectorGroupProps>
    | ReactElement<SelectorItemProps>;
};

export const Selector: FC<SelectorProps> = ({ trigger, children, ...props }) => (
  <Select.Root {...props}>
    {trigger}

    <Select.Portal>
      <Select.Content asChild>
        <MotionCard
          layout
          className={twMerge('min-w-fit g-0 mt-2 shadow-z16')}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <Select.ScrollUpButton className="flex h-2 cursor-default items-center justify-center text-neutral-500">
            <FaChevronUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="flex flex-col gap-2">{children}</Select.Viewport>
          <Select.ScrollDownButton className="flex h-2 cursor-default items-center justify-center text-neutral-500">
            <FaChevronUp />
          </Select.ScrollDownButton>
        </MotionCard>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

Selector.defaultProps = {
  trigger: <SelectorTrigger placeholder="選択してください" />,
};
