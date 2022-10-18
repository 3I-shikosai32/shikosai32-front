import * as Dialog from '@radix-ui/react-dialog';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import type { ButtonProps } from '@/presentation/primitive/component/button/button.presenter';
import { MotionCard, MotionCardProps } from '@/presentation/primitive/component/card/card.presenter';
import twMerge from '@/presentation/style/twmerge';

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

export type ModalButtonGroupProps = ComponentPropsWithoutRef<'div'> & {
  children: Array<ComponentPropsWithoutRef<'button'> | ReactElement<ButtonProps>> | ComponentPropsWithoutRef<'button'> | ReactElement<ButtonProps>;
};

export const ModalButtonGroup: FC<ModalButtonGroupProps> = ({ className, children, ...props }) => (
  <div
    className={twMerge(
      'overflow-visible rounded-base bg-neutral-100 w-full m-0 p-2 grid grid-cols-2 auto-row-fr grid-flow-row-dense gap-2',
      className,
    )}
    {...props}
  >
    {children}
  </div>
);

export type ModalContentProps = MotionCardProps;

export const ModalContent: FC<ModalContentProps> = ({ className, children, ...props }) => (
  <Dialog.Content asChild>
    <MotionCard
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1.0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={twMerge('relative p-6 gap-4 max-w-lg shadow-z32', className)}
      {...props}
    >
      {children}
    </MotionCard>
  </Dialog.Content>
);

export type ModalOverlayProps = ComponentPropsWithoutRef<typeof Dialog.Overlay> & {
  children: ReactNode;
};

export const ModalOverlay: FC<ModalOverlayProps> = ({ className, children, ...props }) => (
  <Dialog.Overlay
    className={twMerge('fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center bg-neutral-900/50', className)}
    {...props}
  >
    {children}
  </Dialog.Overlay>
);

export type ModalProps = Pick<ComponentPropsWithoutRef<typeof Dialog.Root>, 'open' | 'onOpenChange'> & {
  trigger?: ReactElement<ComponentPropsWithoutRef<'button'> | ButtonProps>;
  children: ReactElement<ModalOverlayProps>;
};

// モーダルのトリガーとなるボタンとモーダルの中身を受け取り、モーダルを表示する本体となるコンポーネント
export const Modal: FC<ModalProps> = ({ open, onOpenChange, trigger, children }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
    <Dialog.Portal>{children}</Dialog.Portal>
  </Dialog.Root>
);

Modal.defaultProps = {
  trigger: undefined,
};
