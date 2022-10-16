import Image from 'next/image';
import Router from 'next/router';
import type { FC } from 'react';
import { HttpError500 } from '../../http-error/http-error-500.page';
import { CharacterSelector } from './component/character-selector/character-selector.container';
import { EmailInput } from './component/email-input/email-input.container';
import { NameInput } from './component/name-input/name-input.container';
import { Send } from './component/send/send.container';
import { useFormState } from './hook/use-form.hook';
import useCreateUserUseCase from '@/use-case/user/use-create-user.use-case';
import { useCurrentUserBioUseCase } from '@/use-case/user/use-current-user-bio.use-case';

const NewUser: FC = () => {
  const user = useCurrentUserBioUseCase();
  const [formValue, updateFromValue] = useFormState({
    name: user?.name || undefined,
    email: user?.email || undefined,
    character: undefined,
  });

  const { executeMutation } = useCreateUserUseCase();

  if (user === null) {
    return <HttpError500 />;
  }

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <Image src="/logos/new-user.png" alt="Logo" width={105} height={180} />
        </div>
        <div className="my-3 font-pixel text-2xl font-semibold md:text-4xl">OZの世界へようこそ！</div>
      </div>
      <form>
        <div className="my-10">
          <NameInput
            formValue={formValue}
            setFormValue={(name) => {
              updateFromValue({ name });
            }}
          />
          <EmailInput
            formValue={formValue}
            setFormValue={(email) => {
              updateFromValue({ email });
            }}
          />
        </div>
        <CharacterSelector
          formValue={formValue}
          setFormValue={(character) => {
            updateFromValue({ character });
          }}
        />
        <Send
          formValue={formValue}
          onClick={async () => {
            if (user?.id && formValue.name && formValue.email && formValue.character) {
              await executeMutation({
                data: {
                  id: user.id,
                  name: formValue.name,
                  email: formValue.email,
                  character: formValue.character,
                },
              });

              Router.push('/games');
            }
          }}
          className="my-10"
        />
      </form>
    </>
  );
};

export default NewUser;
