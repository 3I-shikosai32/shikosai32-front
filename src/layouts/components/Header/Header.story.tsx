// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Header } from './index';

type Story = ComponentStoryObj<typeof Header>;

const meta: ComponentMeta<typeof Header> = {
  component: Header,
  argTypes: {
    className: {
      description: '`position: sticky`やサイズの変更のために指定できます。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
