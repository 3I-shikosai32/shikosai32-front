// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { HttpError } from './http-error.component';

type Story = ComponentStoryObj<typeof HttpError>;

const meta: ComponentMeta<typeof HttpError> = {
  component: HttpError,
  args: {
    code: '777',
    description: 'Error Description',
  },
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      description: '`padding`等の調整のために公開されていますが、基本的には使用しないことが好ましいです。',
      control: { type: 'text' },
    },
    code: {
      description: '表示されるHTTPエラーコードを指定する。デザインの都合上、英字のみで指定することが好ましい。必須。',
      control: { type: 'text' },
    },
    description: {
      description: '表示されるHTTPエラーの説明を指定する。デザインの都合上、英字のみで指定することが好ましい。必須。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const Code404: Story = {
  args: {
    code: '404',
    description: 'Not Found',
  },
};
export const Code500: Story = {
  args: {
    code: '500',
    description: 'Internal Server Error',
  },
};
