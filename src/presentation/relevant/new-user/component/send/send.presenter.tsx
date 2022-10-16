import type { FC } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Button, ButtonIcon } from '@/presentation/primitive/component/button/button.presenter';
import twMerge from '@/presentation/style/twmerge';

type SendPresenterProps = {
  disabled: boolean;
} & Required<Pick<JSX.IntrinsicElements['button'], 'onClick'>> &
  Pick<JSX.IntrinsicElements['div'], 'className'>;

const SendPresenter: FC<SendPresenterProps> = ({ disabled, onClick, className }) => (
  <div className={twMerge('flex justify-center', className)}>
    <Button type="submit" onClick={onClick} className="h-12 bg-gradient-to-br gradient-primary md:text-xl" disabled={disabled}>
      <ButtonIcon>
        <AiOutlineSend />
      </ButtonIcon>
      Sign Up
    </Button>
  </div>
);

export default SendPresenter;
