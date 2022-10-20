import type { FC, ReactElement } from 'react';
import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { PointInputUserInteractiveItem } from '../point-input-user-interactive-item/point-input-user-interactive-item.presenter';
import type { PointInputProps } from '../point-input/point-input.presenter';
import { PointInput } from '../point-input/point-input.presenter';
import type { UserBio } from '@/model/user/user-bio.model';
import { Button } from '@/presentation/primitive/component/button/button.presenter';
import { Card, CardProps } from '@/presentation/primitive/component/card/card.presenter';
import {
  UserInteractiveItem,
  UserInteractiveItemActionGroup,
} from '@/presentation/primitive/component/user-interactive-item/user-interactive-item.presenter';
import { UserItem, UserItemIcon, UserItemBio, UserItemName } from '@/presentation/primitive/component/user-item/user-item.presenter';
import type { UserItemProps, UserItemData } from '@/presentation/primitive/component/user-item/user-item.presenter';
import twMerge from '@/presentation/style/twmerge';

type PointInputFormValue = {
  distribution: Array<{
    // 与えるポイントの分布
    userId: UserBio['id'];
    increment: number;
  }>;
};

export type PointInputFormProps = Omit<CardProps, 'children'> & {
  users: Array<UserBio>;
  onSubmit: SubmitHandler<PointInputFormValue>;
};

export const PointInputForm: FC<PointInputFormProps> = ({ users, onSubmit, className, ...props }) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PointInputFormValue>();

  const { fields, replace, append } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'distribution', // unique name for your Field Array
    shouldUnregister: true,
  });

  useEffect(() => {
    console.log(users);
    replace(
      users.map((user) => ({
        userId: user.id,
        increment: 0,
      })),
    );
  }, [users, replace]);

  return (
    <Card className={twMerge('items-stretch', className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="flex flex-col items-stretch justify-start gap-4 bg-neutral-200 p-4">
          {fields.map((field, index) => {
            const matchingUserBio = users.find((user) => user.id === field.userId);
            if (!matchingUserBio) return null;
            return (
              <li key={field.id}>
                <PointInputUserInteractiveItem key={field.id} {...matchingUserBio}>
                  <PointInput key={field.id} {...register(`distribution.${index}.increment`)} />
                </PointInputUserInteractiveItem>
              </li>
            );
          })}
        </ul>
        <Button type="submit">送信</Button>
      </form>
    </Card>
  );
};
