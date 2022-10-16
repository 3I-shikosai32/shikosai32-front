import type { FC } from 'react';
import type { Form } from '../../hook/use-form.hook';
import { NameInputPresenter } from './name-input.presenter';

export type NameInputProps = {
  formValue: Form;
  setFormValue: (value: string) => void;
};

export const NameInput: FC<NameInputProps> = ({ formValue, setFormValue }) => (
  <NameInputPresenter
    isValid
    isValueMissing={!formValue.name}
    value={formValue.name}
    onChange={(event) => {
      setFormValue(event.target.value);
    }}
  />
);
