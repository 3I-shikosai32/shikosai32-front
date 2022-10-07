import type { FC, ComponentPropsWithoutRef } from 'react';
import twMerge from '@/libs/twmerge';

export type ToggleProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & Required<Pick<ComponentPropsWithoutRef<'input'>, 'id'>>;

const Toggle: FC<ToggleProps> = ({ id, className, ...props }) => (
  <div>
    <label htmlFor={id}>
      <input id={id} type="checkbox" className="peer sr-only" {...props} />
      <span
        className={twMerge(
          'block w-[6em] cursor-pointer rounded-full p-[3px] shadow-inner after:block after:h-[2.8em] after:w-[2.8em] after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-[calc(100%-0px)]',
          className,
        )}
      />
    </label>
  </div>
);

export default Toggle;
