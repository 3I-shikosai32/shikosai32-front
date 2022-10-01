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
    <div className=" grid grid-cols-3 px-5">
      {characters.map((character) => (
        <div key={character} className="my-5 mx-1 h-[150px]  rounded-2xl bg-white shadow-2xl">
          <div className="top-5 m-[0.5px]">
            <input id={character} type="checkbox" className="h-5 w-5" checked={checkedItems === character} onChange={handleChange} />
          </div>
          <div className="flex justify-center">
            <Image src={`/characters/${character}.svg`} width={120} height={120} alt="My icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
