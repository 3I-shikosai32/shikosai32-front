import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Input, InputItem, InputMessage, InputLabel, InputLabelName, InputLabelDescription, useInputValidityState } from './index';

type Story = ComponentStoryObj<typeof Input>;

const meta: ComponentMeta<typeof Input> = {
  component: Input,
  args: {
    placeholder: 'ここに入力してください',
  },
  argTypes: {
    type: {
      description: 'HTML準拠の`<input>`の入力タイプです。このコンポーネントでは、テキストフィールド型のUIを持つもののみ使用可能にしています。',
      control: { type: 'select', options: ['text', 'password', 'email', 'number'] },
    },
    required: {
      description: 'HTML準拠の`<input>`の属性です。空欄を許容するかどうかを指定します。',
      control: { type: 'boolean' },
    },
    placeholder: {
      description: 'HTML準拠の`<input>`の属性です。入力欄に何も入力されていないときに表示される文字列です。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    type: 'email',
    value: 'user_example.com',
    placeholder: '(例) user@example.com',
    required: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithAdditionalInfo: Story = {
  args: {
    placeholder: '(例) やまだたろう',
    defaultValue: 'やまだ',
    required: true,
  },
  render: (args) => {
    // Storybookの`render`関数がReactのコンポーネントの命名規則であるPascalCaseを満たしていないから、無効化する
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { inputRef, validityState, forceUpdate } = useInputValidityState();
    const { valid, valueMissing } = validityState;
    return (
      <InputItem className="max-w-md">
        <InputLabel>
          <InputLabelName>名前</InputLabelName>
          <InputLabelDescription>他のユーザーから見えるあなたの表示名になります</InputLabelDescription>
        </InputLabel>
        <InputMessage>公共の場にふさわしくない名前をつけた場合、利用停止になる可能性があります</InputMessage>
        <Input ref={inputRef} onChange={forceUpdate} {...args} />
        <InputMessage type="error" on={valueMissing}>
          名前を入力してください
        </InputMessage>
        <InputMessage type="success" on={valid}>
          この名前は使用可能です
        </InputMessage>
        <InputMessage type="error" on={!valid && !valueMissing}>
          この名前はすでに使われています
        </InputMessage>
      </InputItem>
    );
  },
};
