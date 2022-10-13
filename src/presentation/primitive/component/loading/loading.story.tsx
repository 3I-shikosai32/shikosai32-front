// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import Loading from './loading.presenter';

type Story = ComponentStoryObj<typeof Loading>;

const meta: ComponentMeta<typeof Loading> = {
  component: Loading,
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {};
