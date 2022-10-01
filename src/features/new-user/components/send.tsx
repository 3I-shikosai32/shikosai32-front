import Router from 'next/router';
import type { FC } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Button, ButtonIcon } from '@/components/Button';
import type { UserCreateInput } from '@/libs/graphql/generated/graphql';
import useCreateUserMutationHandler from '@/libs/graphql/handlers/mutation/createUser';

const Send: FC<UserCreateInput> = ({ character, email, id, name }) => {
  const { executeMutation } = useCreateUserMutationHandler();
  return (
    <div className="my-16 flex justify-center">
      <Button
        type="submit"
        className="bg-primary"
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
