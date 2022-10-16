// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';
import NewUser from './new-user.page';
import { useCurrentUserBioUseCase, UseCurrentUserBioUseCaseResult } from '@/use-case/user/use-current-user-bio.use-case';

type Story = ComponentStoryObj<typeof NewUser>;

const injectHooks = (currentUser: UseCurrentUserBioUseCaseResult = { id: 'abc-123', name: 'hoge', email: 'hoge@exmaple.com' }) => [
  injectable(useCurrentUserBioUseCase, () => currentUser),
];

const meta: ComponentMeta<typeof NewUser> = {
  component: NewUser,
  decorators: [(story) => <DiProvider use={injectHooks()}>{story()}</DiProvider>],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  parameters: {
    urql: () => ({
      data: {},
    }),
  },
};

export const IsCurrentUserNull: Story = {
  decorators: [(story) => <DiProvider use={injectHooks(null)}>{story()}</DiProvider>],
};
