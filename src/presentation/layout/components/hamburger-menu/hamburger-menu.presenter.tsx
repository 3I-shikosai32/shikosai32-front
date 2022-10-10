import type { FC } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { Button, ButtonIcon } from '@/presentation/common/component/button/button.presenter';
import type { ButtonProps } from '@/presentation/common/component/button/button.presenter';
import { Link } from '@/presentation/common/component/link/link.presenter';
import { Modal, ModalOverlay, ModalContent } from '@/presentation/common/component/modal/modal.presenter';
import twMerge from '@/presentation/style/twmerge';

export type HamburgerMenuProps = Omit<ButtonProps, 'children'>;

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ className, ...props }) => (
  <Modal
    trigger={
      <Button className={twMerge('', className)} {...props} ghost circle aria-label="ハンバーガーメニューを開く">
        <ButtonIcon>
          <GiHamburgerMenu />
        </ButtonIcon>
      </Button>
    }
  >
    <ModalOverlay className="flex-col items-center justify-between bg-gradient-to-br p-8 gradient-hamburger">
      <Button className="absolute top-6 right-6" ghost circle>
        <ButtonIcon>
          <GrClose />
        </ButtonIcon>
      </Button>
      <ModalContent className="mt-32 w-auto items-center gap-8 bg-transparent text-2xl text-neutral-900 shadow-none">
        <Link href="/ranking">ランキング</Link>
        <Link href="/games">ゲーム一覧</Link>
        <Link href="/gifts">景品交換</Link>
        <Link href="/staff">スタッフ</Link>
      </ModalContent>
      <span className="text-sm font-bold">画面外をタップして閉じる</span>
    </ModalOverlay>
  </Modal>
);
