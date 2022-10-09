// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { RadioGroup, RadioItem } from './radio.component';
import { Icon } from '@/presentation/common/component/icon/icon.component';
import { Label } from '@/presentation/common/component/label/label.component';

type Story = ComponentStoryObj<typeof RadioItem>;

const meta: ComponentMeta<typeof RadioItem> = {
  component: RadioItem,
  args: {
    required: false,
    disabled: false,
  },
  argTypes: {
    value: {
      description: 'このラジオボタンが選ばれたときに親の`<RadioGroup>`で使われる値の`value`を指定できる。',
      control: { type: 'text' },
    },
    required: {
      description: 'このラジオボタンが選ばれていることが`<form>`を送信するのに必須であるかどうかを指定できる。',
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'このラジオボタンが選択可能かどうかを指定できる。',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    id: {
      description: 'HTML準拠。ラベル付のために使用してください。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    value: 'apple',
  },
  render: (args) => (
    <form>
      <RadioGroup>
        <div className="flex flex-row justify-start gap-2">
          <RadioItem id="radio-option-1" {...args} />
          <Label htmlFor="radio-option-1">林檎</Label>
        </div>

        <div className="flex flex-row justify-start gap-2">
          <RadioItem value="grape" id="radio-option-2" />
          <Label htmlFor="radio-option-2">葡萄</Label>
        </div>

        <div className="flex flex-row justify-start gap-2">
          <RadioItem value="iyokan" id="radio-option-3" />
          <Label htmlFor="radio-option-3">伊予柑</Label>
        </div>
      </RadioGroup>
    </form>
  ),
};

export const WithCustomStyle: Story = {
  args: {
    value: 'fox',
  },
  render: (args) => (
    <form>
      <RadioGroup onValueChange={action('onValueChange')}>
        <RadioItem className="flex aspect-auto h-auto w-full flex-row justify-start gap-2 rounded-base p-2 pr-3" id="radio-option-1" {...args}>
          <Icon className="h-8" src="/icons/fox.png" alt="アイコン画像の例" />
          <Label className="" htmlFor="radio-option-1">
            きゅうびさん
          </Label>
        </RadioItem>
        <RadioItem className="flex aspect-auto h-auto w-full flex-row justify-start gap-2 rounded-base p-2 pr-3 " value="cat" id="radio-option-2">
          <Icon className="h-8" src="/icons/cat.png" alt="アイコン画像の例" />
          <Label className="" htmlFor="radio-option-2">
            ねこさん
          </Label>
        </RadioItem>
      </RadioGroup>
    </form>
  ),
};
