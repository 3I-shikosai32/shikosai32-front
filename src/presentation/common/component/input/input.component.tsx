import { FC, ComponentPropsWithoutRef, ComponentPropsWithRef, ReactElement, forwardRef } from 'react';
import { RiInformationFill, RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';
import { useInputValidityState } from './hook/use-input-validity-state.hook';
import { Label, LabelProps } from '@/presentation/common/component/label/label.component';
import twMerge from '@/presentation/style/twmerge';
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
        'col-span-full row-span-full peer px-6 py-3 rounded-base placeholder:text-neutral-400 shadow-z8 focus:shadow-z16 outline-none duration-75 border-2 border-neutral-200 bg-white focus:valid:border-success-700 focus:valid:text-success-700 invalid:border-error-700 invalid:text-error-700',
        className,
      )}
    />
  );
});
Input.displayName = 'Input';

// `<Input>`の入力値の状態に依ってバッジを付加するコンテナコンポーネント
export type InputOverlayProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & {
  children: ReactElement<InputProps>;
};
export const InputOverlay: FC<InputOverlayProps> = ({ children, className, ...props }) => (
  <div className={twMerge('grid grid-cols-1 grid-rows-1', className)} {...props}>
    {children}
    <div className="pointer-events-none col-span-full row-span-full m-0 hidden items-center justify-end p-0 px-4 text-2xl text-success-700 peer-valid:flex">
      <RiCheckboxCircleFill />
    </div>
    <div className="pointer-events-none col-span-full row-span-full m-0 hidden items-center justify-end p-0 px-4 text-2xl text-error-700 peer-invalid:flex">
      <RiErrorWarningFill />
    </div>
  </div>
);

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
  on?: boolean;
  type?: 'info' | 'success' | 'error'; // メッセージの種類と見た目を規定する
};
export const InputMessage: FC<InputMessageProps> = ({ on, type, children, className, ...props }) =>
  on ? (
    <div
      className={twMerge(
        'flex flex-row justify-start items-center rounded-base',
        type !== 'info' && 'flex text-right justify-end peer-valid:text-success-700 peer-invalid:text-error-700',
        type === 'success' && 'text-success-700',
        type === 'error' && 'text-error-700',
        type === 'info' && 'px-4 py-2 gap-2 text-info-700 bg-info-100',
        className,
      )}
      {...props}
    >
      {type === 'info' && (
        <span className="text-2xl">
          <RiInformationFill />
        </span>
      )}
      {children}
    </div>
  ) : null;
InputMessage.defaultProps = {
  on: true,
  type: 'info',
};

export type InputItemProps = Omit<LabelProps, 'children'> & {
  children: Array<ReactElement<InputLabelProps> | ReactElement<InputOverlayProps> | ReactElement<InputMessageProps>>;
};
export const InputItem: FC<InputItemProps> = ({ children, className, ...props }) => (
  <Label className={twMerge('group flex w-fit flex-col justify-start items-stretch gap-1', className)} {...props}>
    {children}
  </Label>
);
