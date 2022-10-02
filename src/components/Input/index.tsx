import { FC, ComponentPropsWithoutRef, ComponentPropsWithRef, ReactElement, forwardRef } from 'react';
import { useInputValidityState } from './hooks/useInputValidityState';
import { Label, LabelProps } from '@/components/Label';
import twMerge from '@/libs/twmerge';

// 外部からの`import`のしやすさのために、このファイル`index.tsx`から`export`しなおす
export { useInputValidityState };

// `<input>`の入力された値に基づく状態を表す`ValidityState`を取得するためにRefを受け取れるようにする
export type InputProps = Omit<ComponentPropsWithRef<'input'>, 'type'> & {
  type: 'text' | 'password' | 'email' | 'number';
};
export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ required, placeholder, className, ...props }, ref) => {
  let text = placeholder;
  if (required) {
    if (placeholder) {
      text = `(必須) ${placeholder}`;
    } else {
      text = `(必須)`;
    }
  }
  return (
    <input
      ref={ref}
      {...props}
      required={required}
      placeholder={text}
      className={twMerge(
        'peer px-6 py-3 rounded-base placeholder:text-neutral-400 shadow-z8 focus:shadow-z16 outline-none duration-75 border-2 border-neutral-200 bg-white focus:valid:border-success-700 focus:valid:text-success-700 invalid:border-error-700 invalid:text-error-700',
        className,
      )}
    />
  );
});
Input.displayName = 'Input';

export type InputLabelNameProps = ComponentPropsWithoutRef<'span'>;
export const InputLabelName: FC<InputLabelNameProps> = ({ children, className, ...props }) => (
  <span className={twMerge('font-branding font-bold flex-grow-0 flex-shrink-0', className)} {...props}>
    {children}
  </span>
);

export type InputLabelDescriptionProps = ComponentPropsWithoutRef<'span'>;
export const InputLabelDescription: FC<InputLabelNameProps> = ({ children, className, ...props }) => (
  <span className={twMerge('text-neutral-500 flex-grow text-right', className)} {...props}>
    {children}
  </span>
);

export type InputLabelProps = ComponentPropsWithoutRef<'div'> & {
  children: Array<ReactElement<InputLabelNameProps> | ReactElement<InputLabelDescriptionProps>> | ReactElement<InputLabelNameProps>;
};
export const InputLabel: FC<InputLabelProps> = ({ className, children, ...props }) => (
  <div className={twMerge('flex flex-row justify-between items-center gap-2', className)} {...props}>
    {children}
  </div>
);

export type InputMessageProps = ComponentPropsWithoutRef<'div'> & {
  isVisible?: boolean;
  informative?: boolean; // 見た目を情報的なものを示す青色に固定する
};
export const InputMessage: FC<InputMessageProps> = ({ isVisible, informative, children, className, ...props }) =>
  isVisible ? (
    <div
      className={twMerge(
        'px-4 py-2 flex flex-row justify-start border-2 text-info-700 border-info-200 items-center rounded-base bg-gradient-to-br from-white to-info-100',
        !informative && 'peer-valid:visible peer-valid:to-success-100 peer-valid:border-success-200 peer-valid:text-success-700',
        !informative && 'peer-invalid:visible peer-invalid:to-error-100 peer-invalid:border-error-200 peer-invalid:text-error-700',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ) : null;
InputMessage.defaultProps = {
  isVisible: true,
  informative: false,
};

export type InputItemProps = LabelProps & {
  children: Array<ReactElement<InputLabelProps> | ReactElement<InputProps> | ReactElement<InputMessageProps>>;
};
export const InputItem: FC<InputItemProps> = ({ children, className, ...props }) => (
  <Label className={twMerge('flex w-fit flex-col gap-1', className)} {...props}>
    {children}
  </Label>
);
