import type { FC } from 'react';
import { useState, useCallback } from 'react';
import { RiShareFill } from 'react-icons/ri';
import { resolveShareMessage } from './resolveShareMessage';
import { Button, ButtonProps, ButtonIcon } from '@/components/Button';
import { Modal, ModalOverlay, ModalContent, ModalTitle, ModalDescription } from '@/components/Modal';

export type ShareButtonProps = Pick<ButtonProps, 'className'> & {
  alwaysAlternative?: boolean;
};

export const ShareButton: FC<ShareButtonProps> = ({ alwaysAlternative, className, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
      <Button onClick={onShareButtonClick} circle ghost {...props}>
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
                {`${resolveShareMessage(new Date())}\n${window.location.href}`}
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
