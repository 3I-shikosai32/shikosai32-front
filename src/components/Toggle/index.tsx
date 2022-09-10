import type { FC } from 'react';
import twMerge from '@/libs/twmerge';

export type ToggleProps = {
  size?: 'small' | 'mid' | 'large'; // min:text-base,mid:text-3xl,large:text-5xl
  color?: string;
};

const Toggle: FC<{ onClick?: () => void; color?: string; size?: 'small' | 'mid' | 'large' }> = ({ onClick, color, size }) => {
  switch (size) {
    case 'large':
      return (
        <div>
          <label htmlFor="toggle">
            <input id="toggle" type="checkbox" onClick={onClick} className="peer sr-only" />
            <span
              className={twMerge(
                'block w-[6em] cursor-pointer rounded-full p-[3px] shadow-inner after:block after:h-[2.8em] after:w-[2.8em] after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-[calc(100%-0px)]',
                color,
              )}
            />
          </label>
        </div>
      );
    case 'mid':
      return (
        <div>
          <label htmlFor="toggle">
            <input id="toggle" type="checkbox" onClick={onClick} className="peer sr-only" />
            <span
              className={twMerge(
                'block w-[4.5em] cursor-pointer rounded-full p-[4px] shadow-lg after:block after:h-[1.9em] after:w-[1.9em] after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-[calc(100%-(-5px))]',
                color,
              )}
            />
          </label>
        </div>
      );
    default:
      return (
        <div>
          <label htmlFor="toggle">
            <input id="toggle" type="checkbox" onClick={onClick} className="peer sr-only" />
            <span
              className={twMerge(
                `block w-[2.7em] cursor-pointer rounded-full p-[3px] shadow-lg after:block after:h-[1.1em] after:w-[1.1em] after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-[calc(100%-(-1.3px))]`,
                color,
              )}
            />
          </label>
        </div>
      );
  }
};

Toggle.defaultProps = {
  onClick: undefined,
  color: 'bg-gray-500',
  size: 'large',
};
export default Toggle;
