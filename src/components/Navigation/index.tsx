import * as PrimitiveNavMenu from '@radix-ui/react-navigation-menu';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import { MotionCard, MotionCardProps } from '@/components/Card';
import twMerge from '@/libs/twmerge';

export type NavigationLinkProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Link>, 'asChild'> & {
  children: ReactNode;
};

// 項目`<NavigationItem>`のなかで使用するリンク用のラッパーコンポーネント
export const NavigationLink: FC<NavigationLinkProps> = ({ children, ...props }) => (
  <PrimitiveNavMenu.Link asChild {...props}>
    {children}
  </PrimitiveNavMenu.Link>
);

export type NavigationTriggerProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Trigger>, 'asChild'> & {
  children: ReactElement;
};

// 項目`<NavigationItem>`のなかで使用する、その項目の吹き出しメニューを開くトリガーとなるボタン用のラッパーコンポーネント
export const NavigationTrigger: FC<NavigationTriggerProps> = ({ children, ...props }) => (
  <PrimitiveNavMenu.Trigger asChild {...props}>
    {children}
  </PrimitiveNavMenu.Trigger>
);

export type NavigationContentProps = MotionCardProps;

// 項目`<NavigationItem>`のなかで使用する、その項目の吹き出しメニューの中身用のコンポーネント
export const NavigationContent: FC<NavigationContentProps> = ({ className, children, ...props }) => (
  <PrimitiveNavMenu.Content asChild>
    <MotionCard initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={twMerge('shadow-z16', className)} {...props}>
      {children}
    </MotionCard>
  </PrimitiveNavMenu.Content>
);

export type NavigationItemProps = Omit<ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Item>, 'asChild' | 'children' | 'value'> &
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

// ナヴィゲーションメニューの項目を表すコンポーネント
export const NavigationItem: FC<NavigationItemProps> = ({ children, ...props }) => (
  <PrimitiveNavMenu.Item {...props}>{children}</PrimitiveNavMenu.Item>
);

export type NavigationMenuProps = Omit<
  ComponentPropsWithoutRef<typeof PrimitiveNavMenu.Root>,
  'asChild' | 'children' | 'orientation' | 'value' | 'defaultValue' | 'onValueChange'
> & {
  children: Array<ReactElement<NavigationItemProps>> | ReactElement<NavigationItemProps>;
  viewportClassName?: string;
};

export const NavigationMenu: FC<NavigationMenuProps> = ({ className, viewportClassName, children, ...props }) => (
  <PrimitiveNavMenu.Root className="relative z-30" {...props}>
    <PrimitiveNavMenu.List className={twMerge('flex flex-row gap-0 m-0 p-0', className)}>{children}</PrimitiveNavMenu.List>
    <PrimitiveNavMenu.Viewport
      className={twMerge('bg-transparent absolute top-full flex justify-center origin-top mt-2 min-w-fit w-full max-w-sm', viewportClassName)}
    />
  </PrimitiveNavMenu.Root>
);

NavigationMenu.defaultProps = {
  viewportClassName: '',
};
