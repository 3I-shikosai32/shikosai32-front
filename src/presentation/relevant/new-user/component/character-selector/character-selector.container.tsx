import type { FC } from 'react';
import type { Form } from '../../hook/use-form.hook';
import { CharacterSelectorPresenter } from './character-selector.presenter';
import type { Character } from '@/model/character/character.model';

type CharacterSelectorContainerProps = {
  formValue: Form;
  setFormValue: (character: Character) => void;
};

export const CharacterSelector: FC<CharacterSelectorContainerProps> = ({ formValue, setFormValue }) => (
  <CharacterSelectorPresenter
    selectedCharacter={formValue.character}
    onChecked={(character) => {
      setFormValue(character);
    }}
  />
);
