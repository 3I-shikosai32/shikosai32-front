import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';
import { Character } from '@/libs/graphql/generated/graphql';

const useCharacter = () => {
  const [checkedItems, setCheckedItems] = useState<string>('');
  const [checkedCharcter, setCheckedCharacter] = useState<Character>();
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    switch (checkedItems) {
      case 'cat':
        setCheckedCharacter(Character.Cat);
        break;
      case 'fox':
        setCheckedCharacter(Character.Fox);
        break;
      case 'pudding':
        setCheckedCharacter(Character.Pudding);
        break;
      case 'reaper':
        setCheckedCharacter(Character.Reaper);
        break;
      case 'tree':
        setCheckedCharacter(Character.Tree);
        break;
      default:
        break;
    }
    setCheckedItems(event.target.id);
  }, [checkedItems]);

  return {
    checkedItems,
    checkedCharcter,
    handleChange,
  };
};
export default useCharacter;
