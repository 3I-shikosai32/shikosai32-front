import Image from 'next/image';
import Router from 'next/router';
import type { FC } from 'react';
import { useEffect } from 'react';
import { di } from 'react-magnetic-di';
import { CharacterSelector } from './component/character-selector/character-selector.container';
import { EmailInput } from './component/email-input/email-input.container';
import { NameInput } from './component/name-input/name-input.container';
import { Send } from './component/send/send.container';
import { useFormState } from './hook/use-form.hook';
import useCreateUserUseCase from '@/use-case/user/use-create-user.use-case';
import { useCurrentUserAuthenticationStatusUseCase } from '@/use-case/user/use-current-user-authentication-status.use-case';
import { useCurrentUserBioUseCase } from '@/use-case/user/use-current-user-bio.use-case';
import { useFindAllUsersNameUseCase } from '@/use-case/user/use-find-all-users-name.use-case';

const NewUser: FC = () => {
  di(useCurrentUserBioUseCase);

  const user = useCurrentUserBioUseCase();
  const [formValue, updateFromValue] = useFormState({
    name: user?.name || undefined,
    email: user?.email || undefined,
    character: undefined,
  });

  const { executeMutation } = useCreateUserUseCase();

  const existingNames = useFindAllUsersNameUseCase();

  const { hasUserAuthenticated, hasUserRegisteredInfo } = useCurrentUserAuthenticationStatusUseCase();
  useEffect(() => {
    switch (hasUserAuthenticated) {
      case true:
        switch (hasUserRegisteredInfo) {
          case true:
            Router.push('/games');
            break;
          default:
            break;
        }
        break;
      case false:
        Router.push('/auth');
        break;
      default:
        break;
    }
  }, [hasUserAuthenticated, hasUserRegisteredInfo]);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <Image src="/logos/new-user.png" alt="Logo" width={105} height={180} />
        </div>
        <div className="my-3 text-center font-pixel text-2xl font-semibold md:text-4xl">OZの世界へようこそ！</div>
      </div>
      <form>
        <div className="my-10">
          <NameInput
            formValue={formValue}
            setFormValue={(name) => {
              updateFromValue({ name });
            }}
            existingNames={existingNames ?? undefined}
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
                  authId: user.id,
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
