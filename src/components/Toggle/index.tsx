import type { FC } from 'react';

export type ToggleProps = {
  size?: 'small' | 'mid' | 'large'; // min:text-base,mid:text-3xl,large:text-5xl
};

const Toggle: FC<{ onClick?: () => void; options: ToggleProps }> = ({ onClick, options }) => {
  const { size } = { ...options };
  switch (size) {
    case 'large':
      return (
        <div >
          <label htmlFor="toggle">
            <input id="toggle" type="checkbox" onClick={onClick} className="peer sr-only" />
            <span
              // eslint-disable-next-line tailwindcss/classnames-order
              className={`block w-[6em] cursor-pointer rounded-full 
             bg-gray-400 shadow-inner
             p-[3px] after:block after:h-[2.8em] after:w-[2.8em] after:rounded-full 
             after:bg-white after:transition
             peer-checked:after:translate-x-[calc(100%-0px)]`}
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
              // eslint-disable-next-line tailwindcss/classnames-order
              className={`shadow-lg block w-[4.5em] cursor-pointer rounded-full bg-gray-400
              p-[4px] after:block after:h-[1.9em] after:w-[1.9em] after:rounded-full 
              after:bg-white after:transition 
              peer-checked:after:translate-x-[calc(100%-(-5px))]`}
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
              // eslint-disable-next-line tailwindcss/classnames-order
              className={`shadow-lg block w-[2.7em] cursor-pointer rounded-full 
           bg-gray-400
             p-[3px] after:block after:h-[1.1em] after:w-[1.1em] after:rounded-full 
             after:bg-white after:transition 
             peer-checked:after:translate-x-[calc(100%-(-1.3px))]`}
            />
          </label>
        </div>
      );
  }
};

Toggle.defaultProps = {
  onClick: undefined,
};
export default Toggle;
