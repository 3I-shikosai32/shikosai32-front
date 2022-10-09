import type { FC, ComponentPropsWithoutRef } from 'react';
import twMerge from '@/presentation/common/twmerge';

export type ToggleProps = Pick<ComponentPropsWithoutRef<'input'>, 'checked' | 'onChange'> & { size: 'small' | 'mid' | 'large'; color: string };

const Toggle: FC<ToggleProps> = ({ checked, onChange, color, size }) => {
  switch (size) {
    case 'large':
      return (
        <div>
          <label htmlFor="toggle">
            <input id="toggle" type="checkbox" onChange={onChange} className="peer sr-only" checked={checked} />
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
            <input id="toggle" type="checkbox" onChange={onChange} className="peer sr-only" checked={checked} />
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
            <input id="toggle" type="checkbox" onChange={onChange} className="peer sr-only" checked={checked} />
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

export default Toggle;
