import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Icon } from './icon.component';

type Story = ComponentStoryObj<typeof Icon>;

const meta: ComponentMeta<typeof Icon> = {
  component: Icon,
  argTypes: {
    alt: {
      description: 'HTML準拠。アイコン画像の代替テキストで省略可能。指定されなかった場合は`アイコン画像`となる。',
      control: { type: 'text' },
    },
    src: {
      description: '`next/image`で指定する画像パス。必須。`StaticImport`で指定することも可能。',
      control: { type: 'text' },
    },
    className: {
      description:
        'サイズを変更するために用意されている。`aspect-square`で縦横比が1:1に固定されているので、`h-24`など高さのみの指定で可。**`position: relative`の設定は上書きしないでください。内部の`<Image>`のサイズが合わなくなります。**',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    src: '/icons/fox.png',
    alt: 'アイコン画像の例',
  },
};

export const CustomSize: Story = {
  args: {
    src: '/icons/cat.png',
    className: 'h-24',
    alt: '大きくなったアイコン画像の例',
  },
};
