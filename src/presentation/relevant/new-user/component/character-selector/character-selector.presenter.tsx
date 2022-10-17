import type { FC } from 'react';
import { Character, CharacterNameDictionary } from '@/model/character/character.model';
import { LiveCharacter } from '@/presentation/primitive/component/live-character/live-character.presenter';

type CharacterSelectorPresenterProps = {
  selectedCharacter: Character | undefined;
  onChecked: (character: Character) => void;
};

export const CharacterSelectorPresenter: FC<CharacterSelectorPresenterProps> = ({ selectedCharacter, onChecked }) => (
  <div className="grid grid-cols-3 px-5">
    {Object.values(Character).map((character) => (
      <div key={character} className="my-5 mx-3 h-[110px] w-[90px] rounded-2xl bg-white shadow-2xl md:mx-10 md:h-[200px] md:w-[200px]">
        <div className="top-5 m-1 md:m-3">
          <input
            id={character}
            type="checkbox"
            className="h-5 w-5"
            checked={selectedCharacter === character}
            onChange={() => {
              onChecked(character);
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <LiveCharacter
            name={CharacterNameDictionary[character]}
            images={[`/characters/${character.toLowerCase()}.svg`]}
            displayName={false}
            className="w-2/3 p-3 md:w-1/2"
          />
        </div>
      </div>
    ))}
  </div>
);
