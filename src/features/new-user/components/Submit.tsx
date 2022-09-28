import Router from 'next/router';
import type { FC } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Button, ButtonIcon } from '@/components/Button';
import type { UserCreateInput } from '@/libs/graphql/generated/graphql';
import useCreateUserMutationHandler from '@/libs/graphql/handlers/mutation/createUser';

// const Submit: FC<UserCreateInput> = ({ avatarUrl, character, email, iconUrl, id, name })
const Submit: FC = () => {
  const { fetching, executeMutation } = useCreateUserMutationHandler();
  return (
    <div className="my-16 flex justify-center">
      <Button type="submit" className='bg-primary'><ButtonIcon><AiOutlineSend /></ButtonIcon>Sign Up</Button>
    </div>
  );
};
export default Submit;
