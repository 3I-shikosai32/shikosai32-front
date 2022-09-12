// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { PageNavigationMenu } from './index';

type Story = ComponentStoryObj<typeof PageNavigationMenu>;

const meta: ComponentMeta<typeof PageNavigationMenu> = {
  component: PageNavigationMenu,
  argTypes: {
    className: {
      description: 'ナヴィゲーションメニューのスタイルを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    className: 'w-full bg-white',
  },
};
