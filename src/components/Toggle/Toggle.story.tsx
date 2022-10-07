// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import Toggle from '.';

type Story = ComponentStoryObj<typeof Toggle>;

const meta: ComponentMeta<typeof Toggle> = {
  component: Toggle,
  args: {
    onChange: action('onChange'),
    className: 'bg-neutral-500',
  },
  argTypes: {
    id: {
      description: 'HTML標準。ラベルと紐付けるためのIDを指定する。アクセシビリティのために必須。',
      control: { type: 'text' },
    },
    onChange: {
      description: 'HTML標準。トグル`<input type="checkbox">`の状態が変更されたときに呼び出されるイベントハンドラを指定する。',
      control: { type: 'none' },
    },
    checked: {
      description: 'HTML標準。トグル`<input type="checkbox">`の状態を指定する。',
      control: { type: 'boolean' },
    },
    className: {
      description: 'トグル`<input type="checkbox">`のスタイルを変更するために用意されている。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const WithSmallSize: Story = {
  args: {
    className: 'bg-neutral-500 h-6',
  },
};
