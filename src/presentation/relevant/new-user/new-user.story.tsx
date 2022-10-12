// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import NewUser from './new-user.page';

type Story = ComponentStoryObj<typeof NewUser>;

const meta: ComponentMeta<typeof NewUser> = {
  component: NewUser,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
};

export default meta;

export const Default: Story = {};
