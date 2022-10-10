import { motion, MotionProps } from 'framer-motion';
import { FC, ReactNode, ComponentPropsWithoutRef, useMemo } from 'react';
import { IconContext } from 'react-icons';
import twMerge from '@/presentation/style/twmerge';

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  MotionProps & {
    type?: 'button' | 'submit';
    outlined?: boolean;
    ghost?: boolean;
    circle?: boolean;
  };

const Button: FC<ButtonProps> = ({ type, outlined, ghost, circle, className, children, ...props }) => {
  //
  // https://github.com/jsx-eslint/eslint-plugin-react/issues/1555
  // react/button-has-type は<button>のtype属性の動的割当を禁止しているが、<button>を拡張する際でもアクセシビリティを考慮しtype属性を割り当てるべき。
  // だから、ユニオン型と条件分岐で回避する
  //
  switch (type) {
    case 'button':
      return (
        <motion.button
          whileHover={{
            scale: props.disabled ? 1.0 : 1.05,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: props.disabled ? 1.0 : 0.95 }}
          type="button"
          className={twMerge(
            'flex flex-row items-center justify-center gap-2 rounded-base px-4 py-2 font-branding bg-neutral-900 text-white text-base font-bold  disabled:contrast-50',
            outlined && 'border-2 border-neutral-200 bg-white text-neutral-900',
            circle && 'rounded-full aspect-square p-2',
            ghost ? 'border-none bg-transparent text-neutral-900 shadow-none' : 'shadow-z16 hover:shadow-z24 active:shadow-none disabled:shadow-none',
            className,
          )}
          {...props}
        >
          {children}
        </motion.button>
      );
    case 'submit':
    default:
      return (
        <motion.button
          whileHover={{
            scale: props.disabled ? 1.0 : 1.05,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: props.disabled ? 1.0 : 0.95 }}
          type="submit"
          className={twMerge(
            'flex flex-row items-center justify-center gap-2 rounded-base px-4 py-2 font-branding bg-neutral-900 text-white text-base font-bold shadow-z16 hover:shadow-z24 active:shadow-none disabled:shadow-none disabled:contrast-50',
            outlined && 'border-2 border-neutral-200 bg-white text-neutral-900',
            circle && 'rounded-full aspect-square',
            ghost && 'border-none bg-transparent text-neutral-900 shadow-none hover:shadow-none',
            className,
          )}
          {...props}
        >
          {children}
        </motion.button>
      );
  }
};

const ButtonIcon: FC<{ children: ReactNode }> = ({ children }) => {
  const iconContextValue = useMemo(() => ({ size: '1.5rem' }), []);
  //
  // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  // 再描画の抑制のためにuseMemo()を使う
  // react-iconsのサイズを変更するために提供されているIconContext.Providerを使う
  //
  return (
    <div className="flex aspect-square max-h-6 items-center justify-center overflow-hidden fill-current">
      <IconContext.Provider value={iconContextValue}>{children}</IconContext.Provider>
    </div>
  );
};
Button.defaultProps = {
  type: 'button',
  outlined: false,
  ghost: false,
  circle: false,
};

export { Button, ButtonIcon };
