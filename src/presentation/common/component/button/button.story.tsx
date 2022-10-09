// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { MdAccessibilityNew } from 'react-icons/md';
import { Button, ButtonIcon } from './button.component';

type Story = ComponentStoryObj<typeof Button>;

const meta: ComponentMeta<typeof Button> = {
  component: Button,
  args: {
    onClick: action('onClick'),
    type: 'button',
  },
  argTypes: {
    children: {
      description: '`<ButtonIcon>`の子として`react-icon`コンポーネントを渡すとアイコンを配置することができる。そのアイコンのテキストのみが望ましい。',
    },
    type: {
      description: 'ほぼHTML準拠。a11yに従いtypeを要求する。formの値を初期化する動作を与えてしまう`reset`を除いた`button`,`submit`が使用可能',
      options: ['button', 'submit'],
      control: { type: 'radio' },
    },
    disabled: {
      description: 'HTML準拠。ボタンを無効化し、onClickイベントを発火させなくする。',
      control: { type: 'boolean' },
    },
    outlined: {
      description: 'ボタンの見た目を枠線と白抜きの背景にする',
      control: { type: 'boolean' },
    },
    ghost: {
      description: 'ボタンの背景等を透明にする',
      control: { type: 'boolean' },
    },
    circle: {
      description: 'ボタンを円形化する',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: 'デフォルトボタン',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '無効化されたボタン',
  },
};

export const Outlined: Story = {
  args: {
    outlined: true,
    children: '枠線付きボタン',
  },
};

export const StyleOverriden: Story = {
  args: {
    className: 'bg-gradient-to-br gradient-primary',
    children: 'スタイルが上書きされたボタン',
  },
};

export const WithReactIcon: Story = {
  args: {
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

export const CircleWithIcon: Story = {
  args: {
    'aria-label': 'プラスボタン',
    circle: true,
  },
  render: (args) => (
    <Button {...args}>
      <ButtonIcon>
        <AiOutlinePlus />
      </ButtonIcon>
    </Button>
  ),
};
