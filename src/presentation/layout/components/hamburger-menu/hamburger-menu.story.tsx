// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { HamburgerMenu } from './hamburger-menu.component';

type Story = ComponentStoryObj<typeof HamburgerMenu>;

const meta: ComponentMeta<typeof HamburgerMenu> = {
  component: HamburgerMenu,
  argTypes: {
    className: {
      description: 'メニューを開くボタンのサイズ等のスタイルを変更するために用意されている。`aspect-square`で縦横比が1:1に固定されています。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
