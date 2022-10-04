// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { PointInput } from '../PointInput';
import { PointInputUserInteractiveItem } from './index';

type Story = ComponentStoryObj<typeof PointInputUserInteractiveItem>;

const meta: ComponentMeta<typeof PointInputUserInteractiveItem> = {
  component: PointInputUserInteractiveItem,
  args: {
    id: 'this-is-user-id-12345',
    name: 'ユーザー名',
    iconUrl: '/icons/fox.png',
    className: 'bg-white max-w-md',
  },
  argTypes: {
    id: {
      description: 'ユーザーのIDを指定する。確認のためユーザー名とともに表示される。また、内部ではコンポーネントの`key`として使用される。',
      control: { type: 'text' },
    },
    name: {
      description: 'ユーザーの名前を指定する。',
      control: { type: 'text' },
    },
    iconUrl: {
      description: 'ユーザーのアイコンのURLを指定する。',
      control: { type: 'text' },
    },
    className: {
      description: 'サイズを変更するために用意されている。',
      control: { type: 'text' },
    },
    children: {
      description: 'このコンポーネントの唯一の子要素として、ポイントの入力欄を提供する`<PointInput>`を必ず指定する。',
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <PointInputUserInteractiveItem {...args}>
      <PointInput min={0} max={20} step={1} defaultValue={10} />
    </PointInputUserInteractiveItem>
  ),
};
