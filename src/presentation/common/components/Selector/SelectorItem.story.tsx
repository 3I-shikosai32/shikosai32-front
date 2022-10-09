// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Selector, SelectorGroup, SelectorItem } from '.';

type Story = ComponentStoryObj<typeof SelectorItem>;

const meta: ComponentMeta<typeof SelectorItem> = {
  component: SelectorItem,
  args: {
    value: 'apple',
    disabled: false,
    children: 'りんご',
  },
  argTypes: {
    value: {
      description:
        'この選択肢を識別する固有な文字列を設定できる。選択された時、この値が祖先の`<Selector>`の`onValueChange`イベントハンドラに渡される。もしくは、イベントハンドラが設定されていなかった場合は、そのまま`value`に設定される。',
      control: { type: 'text' },
    },
    disabled: {
      description: 'この選択肢が選択可能かどうかを指定できる。`true`の場合、選択できず、キーボードでの操作からも除外される。',
      control: { type: 'boolean' },
    },
    children: {
      description:
        'この選択肢のラベルを指定できる。スタイルされていないテキストのみが望ましいが、アイコンなども表示することができる。また、これが選択されているときは、セレクタの常時表示部分の`<SelectorTrigger>`の子要素として与えられる。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <div>
      <Selector onValueChange={action('onValueChange')} aria-label="food">
        <SelectorGroup label="くだもの">
          <SelectorItem {...args} />
          <SelectorItem value="grape">ぶどう</SelectorItem>
        </SelectorGroup>
      </Selector>
    </div>
  ),
};
