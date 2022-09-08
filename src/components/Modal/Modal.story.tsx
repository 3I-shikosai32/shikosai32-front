// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Modal, ModalTitle, ModalDescription } from './index';
import { Button } from '@/components/Button';

type Story = ComponentStoryObj<typeof Modal>;

const meta: ComponentMeta<typeof Modal> = {
  component: Modal,
  argTypes: {
    open: {
      description:
        'このモーダルの開閉状態を指定できる。**開閉を`state`で管理する必要がない場合は、指定しなくてもよい。**その場合でも、`trigger`ボタンとモーダル外クリックによる開閉は可能。',
      control: { type: 'boolean' },
    },
    onOpenChange: {
      description:
        'このモーダルの開閉状態が変更されようとするときに実行されるイベントハンドラ関数を渡すことができる。**開閉を`state`で管理する必要がない場合は、指定しなくてもよい。**その場合でも、`trigger`ボタンとモーダル外クリックによる開閉は可能。',
      control: { type: 'function' },
    },
    trigger: {
      description: 'このモーダルを開くトリガーとなるボタンを指定できる。HTML標準の`<button>`もしくは`<Button>`のみ指定可能。',
      control: { type: 'none' },
    },
    children: {
      description: 'このモーダルのコンテンツとなる子要素を指定できる。',
      defaultValue: '内容がテキストのみのモーダルです。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: () => (
    <Modal trigger={<Button onClick={action('onClick [モーダルを開くボタンが押されました。]')}>モーダルを開く</Button>}>
      <ModalTitle>本当に良いのですか？</ModalTitle>
      <ModalDescription>この動作をすると何かが起こります。画面外をクリックすると閉じることができます。</ModalDescription>
      <Button onClick={action('onClick [モーダルの中の確定ボタンが押されました。]')}>
        確定<span className="text-neutral-700">押しても閉じないよ</span>
      </Button>
    </Modal>
  ),
};

export const WithPassedOpenProps: Story = {
  args: {
    trigger: <Button>モーダルを開く</Button>,
  },
};