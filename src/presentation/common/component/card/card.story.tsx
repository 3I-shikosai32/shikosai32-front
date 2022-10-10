import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Card, MotionCard } from './card.presenter';
import { Button } from '@/presentation/common/component/button/button.presenter';

type Story = ComponentStoryObj<typeof Card>;

const meta: ComponentMeta<typeof Card> = {
  component: Card,
  argTypes: {
    className: {
      description: 'スタイル上書き用。子のレイアウト変更用途のみに使用することが望ましい。',
      control: { type: 'text' },
    },
    children: {
      description: 'このカードのコンテンツとなる子要素を指定できる。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    children: 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。',
  },
};

export const CustomContent: Story = {
  render: (args) => (
    <Card className="max-w-sm" {...args}>
      <h1 className="font-branding text-3xl font-bold">カードの題名です</h1>カードの内容です<Button>ボタン</Button>
    </Card>
  ),
};

export const WithEnteringAnimation: Story = {
  render: () => (
    <MotionCard initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1.0 }} className="max-w-sm">
      <h1 className="font-branding text-3xl font-bold">ふわっと出現</h1>
      {'<MotionCard>でアニメーションを施しています。'}
      <Button>ボタン</Button>
    </MotionCard>
  ),
};
