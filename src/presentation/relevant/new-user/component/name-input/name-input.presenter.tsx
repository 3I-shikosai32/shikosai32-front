import type { FC } from 'react';
import {
  Input,
  InputItem,
  InputLabel,
  InputLabelDescription,
  InputLabelName,
  InputMessage,
  InputOverlay,
  InputProps,
} from '@/presentation/primitive/component/input/input.presenter';

type NameInputPresenterProps = {
  isValueMissing: boolean;
  isValid: boolean;
} & Pick<InputProps, 'value'> &
  Required<Pick<InputProps, 'onChange'>>;

export const NameInputPresenter: FC<NameInputPresenterProps> = ({ isValueMissing, isValid, value, onChange }) => (
  <InputItem className="w-auto">
    <InputLabel>
      <InputLabelName>名前</InputLabelName>
      <InputLabelDescription>他のユーザーから見えるあなたの表示名になります</InputLabelDescription>
    </InputLabel>
    <InputOverlay>
      <Input type="text" value={value} onChange={onChange} required />
    </InputOverlay>
    <InputMessage type="error" on={isValueMissing}>
      名前を入力してください
    </InputMessage>
    <InputMessage type="success" on={isValid}>
      この名前は使用可能です
    </InputMessage>
    <InputMessage type="error" on={!isValid && !isValueMissing}>
      この名前はすでに使われています
    </InputMessage>
  </InputItem>
);
