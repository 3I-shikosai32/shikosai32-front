// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { PointInput } from './point-input.presenter';

type Story = ComponentStoryObj<typeof PointInput>;

const meta: ComponentMeta<typeof PointInput> = {
  component: PointInput,
  args: {
    required: true,
    placeholder: 'n',
    defaultValue: 2,
    min: 0,
    max: 20,
    step: 2,
    onChange: action('onChange'),
  },
  argTypes: {
    required: {
      description: 'HTML準拠の`<input>`の属性です。空欄を許容するかどうかを指定します。',
      control: { type: 'boolean' },
    },
    placeholder: {
      description: 'HTML準拠の`<input>`の属性です。入力欄に何も入力されていないときに表示される文字列です。',
      control: { type: 'text' },
    },
    defaultValue: {
      description: 'HTML準拠の`<input>`の属性です。初期値を指定します。',
      control: { type: 'number' },
    },
    min: {
      description: 'HTML準拠の`<input type="number">`の属性です。入力可能な最小値を指定できます。',
      control: { type: 'number' },
    },
    max: {
      description: 'HTML準拠の`<input type="number">`の属性です。入力可能な最大値を指定できます。',
      control: { type: 'number' },
    },
    step: {
      description:
        'HTML準拠の`<input type="number">`の属性です。入力値の増減の単位を指定できます。ブラウザ標準とこのデザイン特有の増減ボタンを押したときに、この値だけ増減します。',
      control: { type: 'number' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    value: '77',
  },
};

export const WithValueMissing: Story = {
  args: {
    required: true,
    value: undefined,
    defaultValue: undefined,
  },
};
