// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';
import { IsNewUser } from './is-new-user.page';
import { useCheckUserExistanceUseCase } from '@/use-case/user/use-check-user-existance.use-case';
import { useCurrentUserIdUseCase, UseCurrentUserIdUseCaseResult } from '@/use-case/user/use-current-user-id.use-case';

type Story = ComponentStoryObj<typeof IsNewUser>;

const injectHooks = (currentUser: UseCurrentUserIdUseCaseResult = { id: undefined }, isExistance = true) => [
  injectable(useCurrentUserIdUseCase, () => currentUser),
  injectable(useCheckUserExistanceUseCase, () => isExistance),
];

const meta: ComponentMeta<typeof IsNewUser> = {
  component: IsNewUser,
  decorators: [(story) => <DiProvider use={injectHooks()}>{story()}</DiProvider>],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {};

export const IsCurrentUserNull: Story = {
  decorators: [(story) => <DiProvider use={injectHooks(null)}>{story()}</DiProvider>],
};
