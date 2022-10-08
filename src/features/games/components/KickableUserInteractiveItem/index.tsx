import type { FC } from 'react';
import { useState } from 'react';
import { Button } from '@/components/Button';
import { Modal, ModalTitle, ModalDescription, ModalOverlay, ModalContent, ModalButtonGroup } from '@/components/Modal';
import { UserInteractiveItem, UserInteractiveItemActionGroup } from '@/components/UserInteractiveItem';
import { UserItem, UserItemIcon, UserItemBio, UserItemName, UserItemDescription } from '@/components/UserItem';
import type { UserItemProps } from '@/components/UserItem';
import type { UserBioDataFragment } from '@/infra/graphql/generated/graphql';
import twMerge from '@/utils/twmerge';

// TODO: 他のPRで作成された`UserItemData`を使用するように変更する
type UserItemData = Pick<UserBioDataFragment, 'id' | 'name' | 'iconUrl'>;

const UserItemWithId: FC<UserItemData> = ({ id, name, iconUrl }) => (
  <UserItem>
    <UserItemIcon iconUrl={iconUrl} name={name} />
    <UserItemBio>
      <UserItemName>{name}</UserItemName>
      <UserItemDescription>{id}</UserItemDescription>
    </UserItemBio>
  </UserItem>
);

export type KickableUserInteractiveItemProps = Omit<UserItemProps, 'children'> &
  UserItemData & {
    onKick: (({ id }: Pick<UserItemData, 'id'>) => void) | (({ id }: Pick<UserItemData, 'id'>) => Promise<void>);
  };

export const KickableUserInteractiveItem: FC<KickableUserInteractiveItemProps> = ({ id, name, iconUrl, onKick, className, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <UserInteractiveItem key={id} className={twMerge('p-2', className)} {...props}>
      <UserItemWithId {...{ id, name, iconUrl }} />
      <UserInteractiveItemActionGroup>
        <Modal open={isModalOpen} onOpenChange={(isOpen) => setIsModalOpen(isOpen)} trigger={<Button>追い出す</Button>}>
          <ModalOverlay>
            <ModalContent>
              <ModalTitle>本当に追い出しますか?</ModalTitle>
              <ModalDescription>強制的にこのゲームから退出させます</ModalDescription>
              <UserItemWithId {...{ id, name, iconUrl }} />
              <ModalButtonGroup>
                <Button
                  outlined
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                >
                  キャンセル
                </Button>
                <Button
                  onClick={() => {
                    onKick({ id });
                    setIsModalOpen(false);
                  }}
                >
                  追い出す
                </Button>
              </ModalButtonGroup>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </UserInteractiveItemActionGroup>
    </UserInteractiveItem>
  );
};
