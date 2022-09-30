// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Separator } from './index';

type Story = ComponentStoryObj<typeof Separator>;

const meta: ComponentMeta<typeof Separator> = {
  component: Separator,
  args: {
    orientation: 'horizontal',
    decorative: false,
  },
  argTypes: {
    orientation: {
      description:
        '区切り線の向きを指定できる。**`vertical`を使用する場合、親要素と高さを合わせるためには親要素がFlexコンテナ`display: flex;`である必要があります。**この`orientation`と`decorative`属性については継承元の[https://www.radix-ui.com/docs/primitives/components/separator](https://www.radix-ui.com/docs/primitives/components/separator)を参照してください。',
      control: { type: 'select', options: ['horizontal', 'vertical'] },
    },
    decorative: {
      description: 'この区切り線がアクセシビリティや文章の構造上で意味をなさない、つまり装飾的なものであるかどうかを指定する。',
      control: { type: 'boolean' },
    },
    className: {
      description:
        '`bg-success-200`などで区切り線の色を変更するために用意されている。この内部では水平・垂直のスタイルの出し分けに`data-orientation`属性を用いている。そのため、太さの上書き指定が冗長になってしまうので、太さのスタイルの上書きは推奨されない。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="flex w-fit flex-col rounded-base bg-white p-4">
      <h1>コンテンツ1</h1>
      <Separator {...args} />
      <h1>コンテンツ2</h1>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex w-fit flex-row items-center justify-center rounded-base bg-white p-4">
      <h1>コンテンツ1</h1>
      <Separator {...args} />
      <h1>コンテンツ2</h1>
    </div>
  ),
};
