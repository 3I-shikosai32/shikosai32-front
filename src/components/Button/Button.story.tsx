import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MdAccessibilityNew } from 'react-icons/md';
import { Button, ButtonIcon } from './index';

type Story = ComponentStoryObj<typeof Button>;

const meta: ComponentMeta<typeof Button> = {
  component: Button,
  args: {
    onClick: () => {},
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
    children: 'スタイルづけされたボタン',
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
