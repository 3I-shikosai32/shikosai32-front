import * as Dialog from '@radix-ui/react-dialog';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import type { ButtonProps } from '@/components/Button';
import { MotionCard, MotionCardProps } from '@/components/Card';
import twMerge from '@/libs/twmerge';

export type ModalTitleProps = ComponentPropsWithoutRef<typeof Dialog.Title> & {
  children: ReactNode;
};

// `<ModalContent>`のなかで使用するタイトル用のインラインコンポーネント
export const ModalTitle: FC<ModalTitleProps> = ({ className, children, ...props }) => (
  <Dialog.Title className={twMerge('text-2xl font-bold font-branding', className)} {...props}>
    {children}
  </Dialog.Title>
);

export type ModalDescriptionProps = ComponentPropsWithoutRef<typeof Dialog.Description> & {
  children: ReactNode;
};

// `<ModalContent>`のなかで使用する説明書き用のインラインコンポーネント
export const ModalDescription: FC<ModalDescriptionProps> = ({ className, children, ...props }) => (
  <Dialog.Description className={twMerge('font-body text-base', className)} {...props}>
    {children}
  </Dialog.Description>
);

export type ModalContentProps = MotionCardProps;

export const ModalContent: FC<ModalContentProps> = ({ className, children, ...props }) => (
  <MotionCard
    initial={{ opacity: 0, scale: 1.2 }}
    animate={{ opacity: 1, scale: 1.0 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className={twMerge('relative p-6 gap-4 max-w-lg shadow-z32', className)}
    {...props}
  >
    {children}
  </MotionCard>
);

export type ModalOverlayProps = ComponentPropsWithoutRef<typeof Dialog.Overlay> & {
  children: ReactElement<ModalContentProps>;
};

export const ModalOverlay: FC<ModalOverlayProps> = ({ className, children, ...props }) => (
  <Dialog.Overlay
    className={twMerge('fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center bg-neutral-900/50', className)}
    {...props}
  >
    <Dialog.Content asChild>{children}</Dialog.Content>
  </Dialog.Overlay>
);

export type ModalProps = Pick<ComponentPropsWithoutRef<typeof Dialog.Root>, 'open' | 'onOpenChange'> & {
  trigger: ReactElement<ComponentPropsWithoutRef<'button'> | ButtonProps>;
  children: ReactElement<ModalOverlayProps>;
};

// モーダルのトリガーとなるボタンとモーダルの中身を受け取り、モーダルを表示する本体となるコンポーネント
export const Modal: FC<ModalProps> = ({ open, onOpenChange, trigger, children }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <Dialog.Portal>{children}</Dialog.Portal>
  </Dialog.Root>
);
