// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import Loading from './loading.presenter';

type Story = ComponentStoryObj<typeof Loading>;

const meta: ComponentMeta<typeof Loading> = {
  component: Loading,
  argTypes: {
    className: {
      description: 'サイズを変更用のクラス(e.g. h-36 w-36)',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
