import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import { Character } from '@/libs/graphql/generated/graphql';

const useCharacter = () => {
  const [checkedItems, setCheckedItems] = useState<string>('CAT');
  const [checkedCharcter, setCheckedCharacter] = useState<Character>(Character.Cat);
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      switch (checkedItems) {
        case 'CAT':
          setCheckedCharacter(Character.Cat);
          break;
        case 'FOX':
          setCheckedCharacter(Character.Fox);
          break;
        case 'PUDDING':
          setCheckedCharacter(Character.Pudding);
          break;
        case 'REAPER':
          setCheckedCharacter(Character.Reaper);
          break;
        case 'TREE':
          setCheckedCharacter(Character.Tree);
          break;
        default:
          break;
      }
      setCheckedItems(event.target.id);
    },
    [checkedItems],
  );

  return {
    checkedItems,
    checkedCharcter,
    handleChange,
  };
};
export default useCharacter;
