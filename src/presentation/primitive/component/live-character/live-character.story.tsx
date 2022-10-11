import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { AnimatePresence } from 'framer-motion';

import { LiveCharacter } from './live-character.presenter';

type Story = ComponentStoryObj<typeof LiveCharacter>;

const meta: ComponentMeta<typeof LiveCharacter> = {
  component: LiveCharacter,
  decorators: [(story) => <AnimatePresence>{story()}</AnimatePresence>],
  args: {
    name: 'キャラクターの名前',
    images: [
      '/character/fox/base.png',
      '/character/fox/item1.png',
      '/character/fox/item2.png',
      '/character/fox/item3.png',
      '/character/fox/item4.png',
    ],
  },
  argTypes: {
    name: {
      description: 'キャラクター画像の下に表示される名前を指定できる。',
      control: { type: 'text' },
    },
    images: {
      description: 'キャラクター画像のパスを複数指定できる。配列の添字の大きいものがより優先して上に表示される。',
      control: { type: 'object' },
    },
    className: {
      description:
        'サイズを変更するために用意されている。`aspect-square`で縦横比が1:1に固定されているので、`h-24`など高さのみの指定で可。**`position: relative`の設定は上書きしないでください。内部の`<Image>`のサイズが合わなくなります。**',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const NoItems: Story = {
  args: {
    images: ['/character/fox/base.png'],
  },
};
