import Router from 'next/router';
import { FC, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button, ButtonIcon } from '../../primitive/component/button/button.presenter';
import { Card } from '../../primitive/component/card/card.presenter';
import { loginWithGoogle } from '@/infra/firebase/auth';

export const Auth: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card className="my-24 py-5 px-10">
      <h1 className="text-center">
        <span className="text-2xl font-semibold">sign in / sign up</span>
      </h1>
      <div className="my-5">
        <Button
          disabled={isLoading}
          className="bg-secondary-300"
          onClick={async () => {
            setIsLoading(true);
            await loginWithGoogle().catch(() => {
              setIsLoading(false);
            });
            if (isLoading) {
              Router.push('/auth/is-new-user');
            }
          }}
        >
          <ButtonIcon>
            <FcGoogle />
          </ButtonIcon>
          Googleでログインする
        </Button>
      </div>
    </Card>
  );
};
