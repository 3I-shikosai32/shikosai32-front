// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { SignOut } from './sign-out.presenter';

type Story = ComponentStoryObj<typeof SignOut>;

const meta: ComponentMeta<typeof SignOut> = {
  component: SignOut,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: Story = {};
