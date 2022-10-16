import type { FC } from 'react';
import type { Form } from '../../hook/use-form.hook';
import SendPresenter from './send.presenter';

export type SendProps = {
  formValue: Form;
} & Required<Pick<JSX.IntrinsicElements['button'], 'onClick'>> &
  Pick<JSX.IntrinsicElements['div'], 'className'>;

export const Send: FC<SendProps> = ({ formValue, onClick, className }) => {
  const isDisabled = !(formValue.name && formValue.email && formValue.character);

  return <SendPresenter disabled={isDisabled} onClick={onClick} className={className} />;
};
