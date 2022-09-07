import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { AnimatePresence } from 'framer-motion';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import type { ButtonProps } from '@/components/Button';
import { MotionCard, MotionCardProps } from '@/components/Card';
import twMerge from '@/libs/twmerge';

export type NavigationLinkProps = Omit<ComponentPropsWithoutRef<typeof NavigationMenu.Link>, 'asChild'> & {
  children: ReactNode;
};

// `<NavigationMenu>`のなかで使用するリンク用のラッパーコンポーネント
export const NavigationLink: FC<NavigationLinkProps> = ({ children, ...props }) => (
  <NavigationMenu.Link asChild {...props}>
    {children}
  </NavigationMenu.Link>
);

export type NavigationTriggerProps = Omit<ComponentPropsWithoutRef<typeof NavigationMenu.Trigger>, 'asChild'> & {
  children: ReactElement<ComponentPropsWithoutRef<'button'> | ButtonProps>;
};

// `<NavigationItem>`のなかで使用する、吹き出しメニューを開くトリガーとなるボタン用のラッパーコンポーネント
export const NavigationTrigger: FC<NavigationTriggerProps> = ({ children, ...props }) => (
  <NavigationMenu.Trigger asChild {...props}>
    {children}
  </NavigationMenu.Trigger>
);

export type NavigationContentProps = MotionCardProps;

// `<NavigationItem>`のなかで使用する、吹き出しメニューの中身用のコンポーネント
export const NavigationContent: FC<NavigationContentProps> = ({ className, children, ...props }) => (
  <NavigationMenu.Content asChild>
    <MotionCard
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1.0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </MotionCard>
  </NavigationMenu.Content>
);

export type NavigationItemProps = Omit<ComponentPropsWithoutRef<typeof NavigationMenu.Item>, 'asChild' | 'children'> &
  (
    | {
        // 吹き出しメニューが持つ場合の子要素。`<NavigationTrigger>`と`<NavigationContent>`を持つ。
        children: Array<ReactElement<NavigationTriggerProps> | ReactElement<NavigationContentProps>>;
      }
    | {
        // 吹き出しメニューがなく、リンクがそのまま露出している場合の子要素。`<NavigationLink>`のみを受け取る。
        children: ReactElement<NavigationLinkProps>;
      }
  );

export const NavigationItem: FC<NavigationItemProps> = ({ children, ...props }) => <NavigationMenu.Item {...props}>{children}</NavigationMenu.Item>;

export type NavigationListProps = Omit<ComponentPropsWithoutRef<typeof NavigationMenu.Root>, 'children'> & {
  // `<NavigationList>`は一つ以上の`<NavigationItemProps>`しか子要素として受け取ることができない。
  children: Array<ReactElement<NavigationItemProps>>;
};

export const NavigationList: FC<NavigationListProps> = ({ className, children, ...props }) => (
  <NavigationMenu.Root {...props}>
    <AnimatePresence>
      <NavigationMenu.List className={twMerge('flex flex-row gap-0 p-0', className)}>{children}</NavigationMenu.List>
    </AnimatePresence>
  </NavigationMenu.Root>
);
