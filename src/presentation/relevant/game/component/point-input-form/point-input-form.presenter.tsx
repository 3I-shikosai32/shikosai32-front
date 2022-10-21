import { FC, useState, useEffect, useMemo } from 'react';
import { PointInputUserInteractiveItem } from '../point-input-user-interactive-item/point-input-user-interactive-item.presenter';
import { PointInput } from '../point-input/point-input.presenter';
import type { UserBio } from '@/model/user/user-bio.model';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import { Card, CardProps } from '@/presentation/primitive/component/card/card.presenter';
import { Modal, ModalTitle, ModalDescription, ModalOverlay, ModalContent } from '@/presentation/primitive/component/modal/modal.presenter';
import {
  UserItemDescription,
  UserItem,
  UserItemIcon,
  UserItemBio,
  UserItemName,
} from '@/presentation/primitive/component/user-item/user-item.presenter';
import twMerge from '@/presentation/style/twmerge';

type PointInputFormValue = Record<UserBio['id'], number>;

export type PointInputFormProps = Omit<CardProps, 'children' | 'onSubmit'> & {
  users: Array<UserBio>;
  onSubmit: (formValue: PointInputFormValue) => void;
};

export const PointInputForm: FC<PointInputFormProps> = ({ users, onSubmit, className, ...props }) => {
  const [formValue, setFormValue] = useState<PointInputFormValue>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // 存在しなかったユーザーの初期値を設定する
    users.forEach((user) => {
      if (formValue[user.id] === undefined) {
        setFormValue((prev) => ({ ...prev, [user.id]: 0 }));
      }
    });
  }, [formValue, setFormValue, users]);

  useEffect(() => {
    // users に存在しないユーザーの値を削除する
    setFormValue((prev) => {
      const availableUsers = Object.fromEntries(Object.entries(prev).filter(([id]) => users.find((user) => user.id === id)));
      return availableUsers;
    });
  }, [setFormValue, users]);

  const isAbleToSubmit = useMemo(() => users.length > 0, [users]);

  return (
    <Card className={twMerge('items-stretch', className)} {...props}>
      <div className="flex flex-col items-start justify-start gap-4 p-2">
        <h2 className="font-branding text-4xl font-bold">ゲームの結果を入力する</h2>
        <span>順位ごとのポイントと所定のボーナスポイントを考慮して、各プレイヤーに付与するポイントを入力してください。</span>
      </div>
      <form className="flex flex-col items-stretch justify-start gap-2">
        <ul className="flex flex-col items-stretch justify-start gap-4 rounded-base bg-neutral-100 p-4">
          {users.map((user) => (
            <li key={user.id}>
              <Card>
                <PointInputUserInteractiveItem key={user.id} id={user.id} name={user.name} iconUrl={user.iconUrl}>
                  <PointInput
                    defaultValue={0}
                    value={formValue[user.id]}
                    min={0}
                    max={50}
                    step={1}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      setFormValue((prevState) => ({ ...prevState, [user.id]: value }));
                    }}
                  />
                </PointInputUserInteractiveItem>
              </Card>
            </li>
          ))}
        </ul>

        <Modal open={isModalOpen} onOpenChange={(isOpen) => setIsModalOpen(isOpen)} trigger={<Button className="self-end">送信する</Button>}>
          <ModalOverlay>
            <ModalContent>
              <ModalTitle>これでよろしいですか？</ModalTitle>
              <ModalDescription>送信後は取り消すことができません。</ModalDescription>
              <ul className="flex flex-col items-stretch justify-start gap-4">
                {users.map((user) => (
                  <li key={user.id}>
                    <UserItem>
                      <UserItemIcon iconUrl={user.iconUrl} name={user.name} />
                      <UserItemBio>
                        <UserItemName>{user.name}</UserItemName>
                        <UserItemDescription className="text-success-700">{`+ ${formValue[user.id]} Pt`}</UserItemDescription>
                      </UserItemBio>
                    </UserItem>
                  </li>
                ))}
              </ul>
              <Button
                disabled={!isAbleToSubmit}
                onClick={(e) => {
                  e.preventDefault();
                  onSubmit(formValue);
                  setIsModalOpen(false);
                }}
              >
                {isAbleToSubmit ? '送信する' : 'ユーザーが存在しません'}
              </Button>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </form>
    </Card>
  );
};
