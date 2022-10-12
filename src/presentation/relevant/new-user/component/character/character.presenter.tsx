/* eslint-disable array-callback-return */
import Image from 'next/image';
import type { FC, ChangeEvent } from 'react';
import { Character as Charac } from '@/model/character/character.model';

type CharacterProps = {
  checkedItems: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Character: FC<CharacterProps> = ({ checkedItems, handleChange }) => (
  <div className=" grid grid-cols-3 px-5">
    {Object.values(Charac).map((character) => (
      <div key={character} className="my-5 mx-3  h-[110px] w-[90px] rounded-2xl bg-white shadow-2xl md:mx-10 md:h-[200px] md:w-[200px]">
        <div className="top-5 m-1  md:m-3">
          <input id={character} type="checkbox" className="h-5 w-5" checked={checkedItems === character} onChange={handleChange} />
        </div>
        <div className="flex justify-center">
          <div className="h-[110px] w-[110px] translate-y-[-10px] p-[10px] md:translate-y-[0px] md:p-[0px]">
            <Image src={`/characters/${character.toLowerCase()}.svg`} width={110} height={110} alt="My icon" layout="responsive" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Character;
