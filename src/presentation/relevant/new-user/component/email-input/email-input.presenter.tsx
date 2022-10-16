import type { FC } from 'react';
import {
  Input,
  InputItem,
  InputLabel,
  InputLabelName,
  InputMessage,
  InputOverlay,
  InputProps,
} from '@/presentation/primitive/component/input/input.presenter';

type EmailInputPresenterProps = {
  isValueMissing: boolean;
} & Pick<InputProps, 'value'> &
  Required<Pick<InputProps, 'onChange'>>;

export const EmailInputPresenter: FC<EmailInputPresenterProps> = ({ isValueMissing, value, onChange }) => (
  <InputItem className="w-auto">
    <InputLabel>
      <InputLabelName>メール</InputLabelName>
    </InputLabel>
    <InputOverlay>
      <Input type="text" value={value} onChange={onChange} required />
    </InputOverlay>
    <InputMessage type="error" on={isValueMissing}>
      メールアドレスを入力してください
    </InputMessage>
  </InputItem>
);
