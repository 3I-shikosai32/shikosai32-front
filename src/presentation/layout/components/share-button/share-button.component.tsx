import { FC, useEffect, useState, useCallback } from 'react';
import { RiShareFill } from 'react-icons/ri';
import { resolveShareMessage } from './resolve-share-message';
import { Button, ButtonProps, ButtonIcon } from '@/presentation/common/component/button/button.component';
import { Modal, ModalOverlay, ModalContent, ModalTitle, ModalDescription } from '@/presentation/common/component/modal/modal.component';

export type ShareButtonProps = Pick<ButtonProps, 'className'> & {
  alwaysAlternative?: boolean;
};

export const ShareButton: FC<ShareButtonProps> = ({ alwaysAlternative, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentHref, setCurrentHref] = useState<string>('');

  useEffect(() => {
    setCurrentHref(window.location.href);
  }, []);

  const onCloseButtonClick = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);
  const onShareButtonClick = useCallback(async () => {
    try {
      if (alwaysAlternative) throw new Error();
      await navigator.share({
        title: document.title,
        text: resolveShareMessage(new Date()),
        url: window.location.href,
      });
    } catch (error) {
      setIsModalOpen(true);
    }
  }, [setIsModalOpen, alwaysAlternative]);
  const onModalOpenChange = useCallback((isOpen: boolean) => setIsModalOpen(isOpen), [setIsModalOpen]);

  return (
    <>
      <Button onClick={onShareButtonClick} aria-label="共有メニューを開く" circle ghost {...props}>
        <ButtonIcon>
          <RiShareFill />
        </ButtonIcon>
      </Button>
      <Modal open={isModalOpen} onOpenChange={onModalOpenChange} trigger={<button type="button" aria-hidden className="hidden" />}>
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>OZ at 3Iを友達に広めよう！</ModalTitle>
            <ModalDescription>
              このリンクをコピーしてあなたの友達と共有しよう！
              <span className="block overflow-hidden rounded-base bg-neutral-100 p-3 font-branding text-xs text-neutral-700">
                {`${resolveShareMessage(new Date())}\n${currentHref}`}
              </span>
            </ModalDescription>
            <Button onClick={onCloseButtonClick}>閉じる</Button>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

ShareButton.defaultProps = {
  alwaysAlternative: false,
};
