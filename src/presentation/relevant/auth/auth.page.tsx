import Router from 'next/router';
import { FC, useState, useMemo, useEffect } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiUser3Fill } from 'react-icons/ri';
import { Button, ButtonIcon } from '../../primitive/component/button/button.presenter';
import { Card } from '../../primitive/component/card/card.presenter';
import { Link, LinkIcon } from '../../primitive/component/link/link.presenter';
import { loginWithGoogle } from '@/infra/firebase/auth';
import { Modal, ModalTitle, ModalDescription, ModalOverlay, ModalContent } from '@/presentation/primitive/component/modal/modal.presenter';
import { useCurrentUserAuthenticationStatusUseCase } from '@/use-case/user/use-current-user-authentication-status.use-case';

export const Auth: FC = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [shouldShowErrorModal, setShouldShowErrorModal] = useState(false);
  const { hasUserAuthenticated, hasUserRegisteredInfo } = useCurrentUserAuthenticationStatusUseCase();
  useEffect(() => {
    if (hasUserAuthenticated) {
      if (hasUserRegisteredInfo) {
        Router.push('/');
      } else {
        Router.push('/auth/new-user');
      }
    }
  }, [hasUserAuthenticated, hasUserRegisteredInfo]);
  return (
    <Card className="my-24 py-5 px-10">
      <h1 className="text-center">
        <span className="inline-flex items-center justify-center gap-2 text-2xl font-semibold">
          <RiUser3Fill />
          登録・ログイン
        </span>
      </h1>
      <div className="my-5">
        <Button
          disabled={isAuthenticating}
          className="bg-secondary-300"
          onClick={async () => {
            setIsAuthenticating(true);
            try {
              await loginWithGoogle();
            } catch (e) {
              // ログイン処理が失敗したときに、ダイアログを表示する
              setShouldShowErrorModal(true);
            } finally {
              setIsAuthenticating(false);
            }
          }}
        >
          <ButtonIcon>
            <FcGoogle />
          </ButtonIcon>
          Googleでログインする
        </Button>
      </div>
      <Modal
        trigger={
          <Button aria-hidden className="hidden">
            エラー文を表示する
          </Button>
        }
        open={shouldShowErrorModal}
        onOpenChange={(isOpen) => {
          setShouldShowErrorModal(isOpen);
        }}
      >
        <ModalOverlay>
          <ModalContent className="flex items-stretch text-center">
            <ModalTitle>ログインに失敗しました</ModalTitle>
            <ModalDescription className="flex flex-col gap-2">
              <span>
                ログインメニューが途中で閉じられたか、
                <br />
                内部でエラーが発生した可能性があります。
                <br />
              </span>
              <span className="text-xs text-neutral-500">
                再度試してみても同様のエラーが発生する場合は、
                <br />
                お近くのスタッフもしくは下記のSNSアカウントに問い合わせてください。
                <br />
              </span>
            </ModalDescription>
            <div className="flex items-center justify-center">
              <Link href="https://twitter.com/3i_shikosai32" className="inline-flex gap-2 font-normal text-neutral-400 drop-shadow-none">
                <LinkIcon className="text-neutral-200">
                  <FaTwitter />
                </LinkIcon>
                @3i_shikosai32
              </Link>
            </div>
            <Button
              onClick={() => {
                setShouldShowErrorModal(false);
              }}
            >
              閉じる
            </Button>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </Card>
  );
};
