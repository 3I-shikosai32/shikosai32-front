// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { RadioGroup, RadioItem, RadioIndicator, RadioButton } from '.';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import { Label } from '@/components/Label';

type Story = ComponentStoryObj<typeof RadioGroup>;

const meta: ComponentMeta<typeof RadioGroup> = {
  component: RadioGroup,
  args: {
    onValueChange: action('onValueChange'),
  },
  argTypes: {
    defaultValue: {
      description: 'このラジオボタングループの初期状態の選択肢`<RadioItem>`の`value`を指定できる。',
      control: { type: 'text' },
    },
    value: {
      description: 'このラジオボタングループで現在選択されている選択肢`<RadioItem>`の`value`を指定できる。',
      control: { type: 'text' },
    },
    onValueChange: {
      description: 'このラジオボタングループで選択される選択肢が変更されるときに、その`value`とともに呼び出されるイベントハンドラを指定できる。',
      control: { type: 'none' },
    },
    children: {
      description: 'このラジオボタングループが持つ選択肢となる子要素を`<RadioItem>`を与えることにより指定できる。',
      control: { type: 'none' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <form>
      <RadioGroup {...args}>
        <div className="flex flex-row gap-2">
          <RadioItem value="apple" id="radio-option-1" />
          <Label htmlFor="radio-option-1">林檎</Label>
        </div>

        <div className="flex flex-row gap-2">
          <RadioItem value="grape" id="radio-option-2" />
          <Label htmlFor="radio-option-2">葡萄</Label>
        </div>

        <div className="flex flex-row gap-2">
          <RadioItem value="iyokan" id="radio-option-3" />
          <Label htmlFor="radio-option-3">伊予柑</Label>
        </div>
      </RadioGroup>
    </form>
  ),
};

export const LargeButton: Story = {
  render: (args) => (
    <form>
      <RadioGroup {...args}>
        <RadioItem className="flex aspect-auto h-fit flex-col rounded-base p-4" value="fox" id="radio-option-1">
          <Icon className="h-36" src="/icons/fox.png" alt="アイコン画像の例" />
          <Label htmlFor="radio-option-1">きゅうびさん</Label>
        </RadioItem>
      </RadioGroup>
    </form>
  ),
};
