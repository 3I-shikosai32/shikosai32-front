import Router from 'next/router';
import type { FC } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import type { UserCreateInput } from '@/infra/graphql/generated/graphql';
import useCreateUserMutationHandler from '@/infra/graphql/handler/mutation/create-user';
import { Button, ButtonIcon } from '@/presentation/primitive/component/button/button.presenter';

const Send: FC<UserCreateInput> = ({ character, email, id, name }) => {
  // TODO: `useCreateUserMutationHandler`の実装を`src/use-case`に移す
  const { executeMutation } = useCreateUserMutationHandler();
  // TODO: 見た目のDOMの部分を`.presenter.tsx`に分離する
  return (
    <div className="my-16 flex justify-center">
      <Button
        type="submit"
        className="h-[50px] w-[150px] bg-gradient-to-br gradient-primary md:mt-20 md:h-[70px] md:w-[200px] md:rounded-[60px]"
        onClick={async () => {
          if (email === '' || name === '') {
            // eslint-disable-next-line no-alert
            alert('input your name or email');
          } else {
            await executeMutation({ data: { id, character, name, email } });
            Router.push('/');
          }
        }}
      >
        <ButtonIcon>
          <AiOutlineSend />
        </ButtonIcon>
        Sign Up
      </Button>
    </div>
  );
};
export default Send;
