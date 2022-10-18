import Link from 'next/link';
import type { FC } from 'react';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import {
  Modal,
  ModalTitle,
  ModalDescription,
  ModalOverlay,
  ModalContent,
  ModalButtonGroup,
} from '@/presentation/primitive/component/modal/modal.presenter';
import type { ModalProps } from '@/presentation/primitive/component/modal/modal.presenter';

export type SignupProgressNotificationModalProps = Pick<ModalProps, 'open' | 'onOpenChange'>;

export const SignupProgressNotificationModal: FC<SignupProgressNotificationModalProps> = ({ open, onOpenChange }) => (
  <Modal open={open} onOpenChange={onOpenChange}>
    <ModalOverlay>
      <ModalContent>
        <ModalTitle>まだ登録が完了していません！</ModalTitle>
        <ModalDescription>
          情報登録ページから、ニックネームや
          <br />
          キャラクターなどの追加の情報を入力してください
        </ModalDescription>
        <ModalButtonGroup>
          <Link href="/auth/sign-out">
            <Button outlined>サインアウトする</Button>
          </Link>
          <Link href="/auth/new-user">
            <Button className="bg-gradient-to-br gradient-primary">登録ページへ</Button>
          </Link>
        </ModalButtonGroup>
      </ModalContent>
    </ModalOverlay>
  </Modal>
);
