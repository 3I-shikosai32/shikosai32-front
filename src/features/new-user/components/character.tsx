/* eslint-disable array-callback-return */
import Image from 'next/image';
import type { FC, ChangeEvent } from 'react';

type CharacterProps = {
  checkedItems: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Character: FC<CharacterProps> = ({ checkedItems, handleChange }) => {
  const characters = ['cat', 'fox', 'goku', 'pudding', 'reaper', 'tree'];
  return (
    <div className="grid grid-cols-3 px-5">
      {characters.map((character) => (
        <div key={character} className="relative my-5 h-32 rounded-2xl">
          <div className="top-5 m-1">
            <input id={character} type="checkbox" className="absolute h-5 w-5" checked={checkedItems === character} onChange={handleChange} />
          </div>
          <div className="flex justify-center">
            <Image src={`/selecticons/${character}.png`} width={140} height={140} alt="My icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
