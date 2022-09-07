import * as PrimitiveNavMenu from '@radix-ui/react-navigation-menu';
import { motion, AnimatePresence } from 'framer-motion';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import { MotionCard, MotionCardProps } from '@/components/Card';
import twMerge from '@/libs/twmerge';

export type NavigationLinkProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Link>, 'asChild'> & {
  children: ReactNode;
};

// `<PrimitiveNavMenu>`のなかで使用するリンク用のラッパーコンポーネント
export const NavigationLink: FC<NavigationLinkProps> = ({ children, ...props }) => (
  <PrimitiveNavMenu.Link asChild {...props}>
    {children}
  </PrimitiveNavMenu.Link>
);

export type NavigationTriggerProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Trigger>, 'asChild'> & {
  children: ReactElement;
};

// `<NavigationItem>`のなかで使用する、吹き出しメニューを開くトリガーとなるボタン用のラッパーコンポーネント
export const NavigationTrigger: FC<NavigationTriggerProps> = ({ children, ...props }) => (
  <PrimitiveNavMenu.Trigger asChild {...props}>
    {children}
  </PrimitiveNavMenu.Trigger>
);

const MotionPrimitiveNavMenuContent = motion(PrimitiveNavMenu.Content);

export type NavigationContentProps = MotionCardProps;

// `<NavigationItem>`のなかで使用する、吹き出しメニューの中身用のコンポーネント
export const NavigationContent: FC<NavigationContentProps> = ({ className, children, ...props }) => (
  <MotionPrimitiveNavMenuContent asChild>
    <MotionCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={twMerge('', className)} {...props}>
      {children}
    </MotionCard>
  </MotionPrimitiveNavMenuContent>
);

export type NavigationItemProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Item>, 'asChild' | 'children'> &
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

export const NavigationItem: FC<NavigationItemProps> = ({ children, ...props }) => (
  <PrimitiveNavMenu.Item {...props}>{children}</PrimitiveNavMenu.Item>
);

export type NavigationListProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.List>, 'asChild' | 'children'> & {
  // `<NavigationList>`は一つ以上の`<NavigationItemProps>`しか子要素として受け取ることができない。
  children: Array<ReactElement<NavigationItemProps>> | ReactElement<NavigationItemProps>;
};

export const NavigationList: FC<NavigationListProps> = ({ className, children, ...props }) => (
  <PrimitiveNavMenu.List className={twMerge('flex flex-row gap-0 m-0 p-0', className)} {...props}>
    {children}
  </PrimitiveNavMenu.List>
);

export type NavigationViewportProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Viewport>, 'asChild'>;

// `<NavigationMenu>`のなかで使用する、吹き出しメニューの表示位置を制御するコンポーネント。この子孫として`<NavigationContent>`が配置される。
export const NavigationViewport: FC<NavigationViewportProps> = ({ className, ...props }) => (
  <PrimitiveNavMenu.Viewport className={twMerge('absolute top-full origin-top mt-2 w-full', className)} {...props} />
);

export type PrimitiveNavMenuProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Root>, 'asChild' | 'children'> & {
  children: Array<ReactElement<NavigationListProps> | ReactElement<NavigationViewportProps>> | ReactElement<NavigationListProps>;
};

export const NavigationMenu: FC<PrimitiveNavMenuProps> = ({ children, ...props }) => (
  <PrimitiveNavMenu.Root className="relative z-10 w-fit" {...props}>
    {children}
  </PrimitiveNavMenu.Root>
);
