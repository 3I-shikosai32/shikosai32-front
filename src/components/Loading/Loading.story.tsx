// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import Loading from '.';

type Story = ComponentStoryObj<typeof Loading>;

const meta: ComponentMeta<typeof Loading> = {
  component: Loading,
  argTypes: {
    fat: {
      description: 'ボーダーを太くするかどうか',
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'text' },
    },
  },
};
export default meta;

export const Default: Story = {
  args: {
    fat: true,
    size: 100,
  },
};
