import type { FC } from 'react';
import type { Form } from '../../hook/use-form.hook';
import { NameInputPresenter } from './name-input.presenter';

export type NameInputProps = {
  formValue: Form;
  setFormValue: (value: string) => void;
  existingNames: string[] | undefined;
};

export const NameInput: FC<NameInputProps> = ({ formValue, setFormValue, existingNames }) => {
  let isValid;
  if (existingNames !== undefined) {
    isValid = formValue.name ? !existingNames.includes(formValue.name) : false;
  } else {
    isValid = undefined;
  }

  return (
    <NameInputPresenter
      isValid={isValid}
      isValueMissing={!formValue.name}
      value={formValue.name}
      onChange={(event) => {
        setFormValue(event.target.value);
      }}
    />
  );
};
