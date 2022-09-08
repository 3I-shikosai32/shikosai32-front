// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Selector, SelectorTrigger, SelectorGroup, SelectorItem, SelectorSeparator } from '.';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

type Story = ComponentStoryObj<typeof Selector>;

const meta: ComponentMeta<typeof Selector> = {
  component: Selector,
  args: {
    onValueChange: action('onValueChange'),
  },
  argTypes: {
    defaultValue: {
      description: 'このセレクターの初期状態の選択肢`<SelectorItem>`の`value`を指定できる。',
      control: { type: 'text' },
    },
    value: {
      description: 'このセレクターで現在選択されている選択肢`<SelectorItem>`の`value`を指定できる。',
      control: { type: 'text' },
    },
    // onValueChange: {
    //   description: 'このセレクターで選択される選択肢が変更されるときに、その`value`とともに呼び出されるイベントハンドラを指定できる。',
    //   control: { type: 'none' },
    // },
    // open: {
    //   description: 'このセレクターの開閉状態を指定できる。',
    //   control: { type: 'boolean' },
    // },
    onOpenChange: {
      description: 'このセレクターで開閉状態が変更されるときに、その`boolean`とともに呼び出されるイベントハンドラを指定できる。',
      control: { type: 'none' },
    },
    trigger: {
      description: 'このセレクタのメニューを開くトリガーとなるボタンを指定できる。`<SelectorTrigger>`のみ指定可能。省略可能。',
      control: { type: 'none' },
    },
    children: {
      description:
        "このセレクタを使い選ぶことのできる選択肢を、`<SelectorItem>`を与えることにより指定できる。また、名前付きの選択肢のグループを作成したい場合、`<SelectorGroup label='グループの名前'>`に選択肢を子要素として与えることで実現できる。そして、区切り線を追加するために`<SelectorSeparator>`を使うことができる。",
      control: { type: 'none' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <div>
      <Selector aria-label="food" {...args}>
        <SelectorGroup label="くだもの">
          <SelectorItem value="apple">りんご</SelectorItem>
          <SelectorItem value="grape">ぶどう</SelectorItem>
        </SelectorGroup>
        <SelectorGroup label="野菜">
          <SelectorItem value="potato">馬鈴薯</SelectorItem>
          <SelectorItem value="carrot">人参</SelectorItem>
        </SelectorGroup>
        <SelectorSeparator />
        <SelectorItem value="water">お水</SelectorItem>
        <SelectorItem value="cola">コーラ</SelectorItem>
      </Selector>
    </div>
  ),
};

export const OptionWithIcon: Story = {
  render: (args) => (
    <div>
      <Selector aria-label="category" {...args}>
        <SelectorGroup label="日付ごと">
          <SelectorItem value="day1">一日目のみ</SelectorItem>
          <SelectorItem value="day2">二日目のみ</SelectorItem>
        </SelectorGroup>
        <SelectorSeparator />
        <SelectorGroup label="使用キャラごと">
          <SelectorItem value="fox">
            <Icon src="/icons/fox.png" alt="きゅうびさんの画像" className="h-6" />
            <span className="font-bold">きゅうびさん</span>のみ
          </SelectorItem>
          <SelectorItem value="cat">
            <Icon src="/icons/cat.png" alt="ねこさんの画像" className="h-6" />
            <span className="font-bold">ねこさん</span>のみ
          </SelectorItem>
        </SelectorGroup>
      </Selector>
    </div>
  ),
};
