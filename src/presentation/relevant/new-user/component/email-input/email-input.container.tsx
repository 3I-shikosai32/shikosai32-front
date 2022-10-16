import type { FC } from 'react';
import type { Form } from '../../hook/use-form.hook';
import { EmailInputPresenter } from './email-input.presenter';

export type EmailInputProps = {
  formValue: Form;
  setFormValue: (value: string) => void;
};

export const EmailInput: FC<EmailInputProps> = ({ formValue, setFormValue }) => (
  <EmailInputPresenter
    isValueMissing={!formValue.email}
    value={formValue.email}
    onChange={(event) => {
      setFormValue(event.target.value);
    }}
  />
);
