import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence } from 'framer-motion';
import type { FC, ComponentPropsWithoutRef, ReactNode, ReactElement } from 'react';
import type { ButtonProps } from '@/components/Button';
import { MotionCard, MotionCardProps } from '@/components/Card';
import twMerge from '@/libs/twmerge';

type ModalContentProps = MotionCardProps;

const ModalContent: FC<ModalContentProps> = ({ className, children, ...props }) => (
  <AnimatePresence>
    <MotionCard
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1.0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className={twMerge('p-6 gap-4', className)}
      {...props}
    >
      {children}
    </MotionCard>
  </AnimatePresence>
);

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

export type ModalProps = Pick<ComponentPropsWithoutRef<typeof Dialog.Root>, 'open' | 'onOpenChange'> & {
  trigger: ReactElement<ComponentPropsWithoutRef<'button'> | ButtonProps>;
  children: ReactNode;
};

// モーダルのトリガーとなるボタンとモーダルの中身を受け取り、モーダルを表示する本体となるコンポーネント
export const Modal: FC<ModalProps> = ({ open, onOpenChange, trigger, children }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content asChild>
        <ModalContent>{children}</ModalContent>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
