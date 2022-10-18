import type { FC } from 'react';
import { di } from 'react-magnetic-di';
import { useSignupProgressNotificationModal } from './hook/use-signup-progress-notification-modal.hook';
import { SignupProgressNotificationModal } from './signup-progress-notification-modal.presenter';

export const SignUpProgressNotificationModalContainer: FC = () => {
  di(useSignupProgressNotificationModal);
  const states = useSignupProgressNotificationModal();
  return <SignupProgressNotificationModal {...states} />;
};
