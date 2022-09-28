/* eslint-disable array-callback-return */
import Image from 'next/image';
import type { FC, ChangeEvent } from 'react';
import twMerge from '@/libs/twmerge';

type CharacterProps = {
  checkedItems: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checkboxSize: number;
  boxMergin: string;
  imageSize:number;
};

const Character: FC<CharacterProps> = ({ checkedItems, handleChange, checkboxSize, boxMergin, imageSize }) => {
  const icons = ['cat', 'fox', 'goku', 'pudding', 'reaper', 'tree'];
  return (
    <div className="grid grid-cols-3 px-5">
      {icons.map((item) => (
        <div key={item} className={twMerge("rounded-2xl bg-white shadow-2xl h-32",boxMergin)}>
          <div className="m-1">
            <input
              id={item}
              type="checkbox"
              className={twMerge(`h-${checkboxSize} w-${checkboxSize}`)}
              checked={checkedItems === item}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <Image src={`/icons/${item}.png`} width={imageSize} height={imageSize} alt="My avatar" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Character;
