// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { MdAccessibilityNew } from 'react-icons/md';
import { Button, ButtonIcon } from './index';

type Story = ComponentStoryObj<typeof Button>;

const meta: ComponentMeta<typeof Button> = {
  component: Button,
  args: {
    onClick: action('onClick'),
  },
  argTypes: {
    type: {
      options: ['button', 'submit'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    outlined: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    type: 'button',
    children: 'デフォルトボタン',
  },
};

export const Disabled: Story = {
  args: {
    type: 'button',
    disabled: true,
    children: '無効化されたボタン',
  },
};

export const Outlined: Story = {
  args: {
    type: 'button',
    outlined: true,
    children: '枠線付きボタン',
  },
};

export const StyleOverriden: Story = {
  args: {
    type: 'button',
    className: 'bg-gradient-to-br gradient-primary',
    children: 'スタイルが上書きされたボタン',
  },
};

export const WithReactIcon: Story = {
  args: {
    type: 'button',
    className: 'bg-success-700',
  },
  render: (args) => (
    <Button {...args}>
      <ButtonIcon>
        <MdAccessibilityNew />
      </ButtonIcon>
      <i>react-icon</i>を使ったボタン
    </Button>
  ),
};

export const OnlyReactIcon: Story = {
  args: {
    type: 'button',
    className: 'p-4 text-neutral-500',
  },
  render: (args) => (
    <Button {...args}>
      <ButtonIcon>
        <AiOutlinePlus />
      </ButtonIcon>
    </Button>
  ),
};
