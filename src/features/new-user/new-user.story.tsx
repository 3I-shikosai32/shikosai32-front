// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import NewUser from './index';

type Story = ComponentStoryObj<typeof NewUser>;

const meta: ComponentMeta<typeof NewUser> = {
  component: NewUser,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
};

export default meta;

export const Default: Story = {};
