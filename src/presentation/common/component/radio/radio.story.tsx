// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { RadioGroup, RadioItem } from './radio.component';
import { Icon } from '@/presentation/common/component/icon/icon.component';
import { Label } from '@/presentation/common/component/label/label.component';

type Story = ComponentStoryObj<typeof RadioGroup>;

const meta: ComponentMeta<typeof RadioGroup> = {
  component: RadioGroup,
  args: {
    onValueChange: action('onValueChange'),
    orientation: 'vertical',
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
    name: {
      description: '`<form>`で送信するときに選択されている`value`に紐づけて使われる名前を指定できる。',
      control: { type: 'boolean' },
    },
    required: {
      description: 'このラジオボタングループが`<form>`を送信するのに必須であるかどうかを指定できる。',
      control: { type: 'boolean' },
    },
    loop: {
      description: 'キーボード操作のときに、始点と末端をつなげるかどうかを指定できる。',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    orientation: {
      description:
        'このラジオボタングループの選択肢が横に並んでいるか縦に並んでいるか未規定(`undefined`)かを指定できる。キーボード操作のときに使われるキーにのみ影響する。見た目には影響しない。',
      control: { type: 'radio' },
      options: ['horizontal', 'vertical', undefined],
      defaultValue: undefined,
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    name: 'fruit',
    defaultValue: 'apple',
    required: true,
  },
  render: (args) => (
    <form>
      <RadioGroup {...args}>
        <div className="flex flex-row justify-start gap-2">
          <RadioItem value="apple" id="radio-option-1" />
          <Label htmlFor="radio-option-1">林檎</Label>
        </div>

        <div className="flex flex-row justify-start gap-2">
          <RadioItem value="grape" id="radio-option-2" />
          <Label htmlFor="radio-option-2">葡萄</Label>
        </div>

        <div className="flex flex-row justify-start gap-2">
          <RadioItem disabled value="iyokan" id="radio-option-3" />
          <Label htmlFor="radio-option-3">伊予柑</Label>
        </div>
      </RadioGroup>
    </form>
  ),
};

export const WithCustomStyle: Story = {
  render: (args) => (
    <form>
      <RadioGroup {...args}>
        <RadioItem className="flex aspect-auto h-auto w-full flex-row justify-start gap-2 rounded-base p-2 pr-3" value="fox" id="radio-option-1">
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
        <RadioItem className="flex aspect-auto h-auto w-full flex-row justify-start gap-2 rounded-base p-2 pr-3 " value="tree" id="radio-option-3">
          <Icon className="h-8" src="/icons/tree.png" alt="アイコン画像の例" />
          <Label className="" htmlFor="radio-option-3">
            おおもりさん
          </Label>
        </RadioItem>
        <RadioItem
          disabled
          className="flex aspect-auto h-auto w-full flex-row justify-start gap-2 rounded-base p-2 pr-3 "
          value="goku"
          id="radio-option-4"
        >
          <Icon className="h-8" src="/icons/goku.png" alt="アイコン画像の例" />
          <Label className="" htmlFor="radio-option-4">
            そんごくう
          </Label>
        </RadioItem>
        <RadioItem className="flex aspect-auto h-auto w-full flex-row justify-start gap-2 rounded-base p-2 pr-3 " value="reaper" id="radio-option-5">
          <Icon className="h-8" src="/icons/reaper.png" alt="アイコン画像の例" />
          <Label className="" htmlFor="radio-option-5">
            りっぱーさん
          </Label>
        </RadioItem>
        <RadioItem className="flex aspect-auto h-auto w-full flex-row justify-start gap-2 rounded-base p-2 pr-3 " value="pudding" id="radio-option-6">
          <Icon className="h-8" src="/icons/pudding.png" alt="アイコン画像の例" />
          <Label className="" htmlFor="radio-option-6">
            ぷりん
          </Label>
        </RadioItem>
      </RadioGroup>
    </form>
  ),
};
