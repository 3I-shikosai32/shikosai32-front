import type { FC, MouseEventHandler } from 'react';
import { useCallback } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Button, ButtonIcon } from '@/presentation/primitive/component/button/button.presenter';
import Loading from '@/presentation/primitive/component/loading/loading.presenter';
import twMerge from '@/presentation/style/twmerge';

type SendPresenterProps = {
  disabled: boolean;
  isLoading: boolean;
} & Required<Pick<JSX.IntrinsicElements['button'], 'onClick'>> &
  Pick<JSX.IntrinsicElements['div'], 'className'>;

const SendPresenter: FC<SendPresenterProps> = ({ disabled, isLoading, onClick, className }) => {
  const onClickHandler = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      onClick(e);
    },
    [onClick],
  );

  return (
    <div className={twMerge('flex justify-center', className)}>
      <Button type="submit" onClick={onClickHandler} className="h-12 bg-gradient-to-br gradient-primary md:text-xl" disabled={disabled || isLoading}>
        {isLoading ? (
          <Loading className="aspect-square h-8 border-white border-t-transparent" />
        ) : (
          <ButtonIcon>
            <AiOutlineSend />
          </ButtonIcon>
        )}
        Sign Up
      </Button>
    </div>
  );
};

export default SendPresenter;
