// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { ShareButton } from './index';

type Story = ComponentStoryObj<typeof ShareButton>;

const meta: ComponentMeta<typeof ShareButton> = {
  component: ShareButton,
  args: {},
  argTypes: {
    className: {
      description: 'シェアメニューを開くボタンのサイズ等のスタイルを変更するために用意されている。`aspect-square`で縦横比が1:1に固定されています。',
      control: { type: 'text' },
    },
    alwaysAlternative: {
      description: '常にWeb Audio APIではなく、代替モーダルを表示するかどうかを指定する。',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default: Story = {};
