import { useState } from 'react';
import type { Character } from '@/model/character/character.model';

export type Form = Partial<{
  name: string;
  email: string;
  character: Character;
}>;

export const useFormState = (initialValue: Form): [Form, (newFormValue: Form) => void] => {
  const [formValue, setFormValue] = useState(initialValue);

  const setter = (newFormValue: Form) => {
    setFormValue({
      name: newFormValue.name ?? formValue.name,
      email: newFormValue.email ?? formValue.email,
      character: newFormValue.character || formValue.character,
    });
  };

  return [formValue, setter];
};
