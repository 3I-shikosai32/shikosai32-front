// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Modal, ModalTitle, ModalDescription, ModalOverlay, ModalContent, ModalButtonGroup } from './modal.presenter';
import { Button } from '@/presentation/common/component/button/button.component';

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
      description:
        'このモーダルのコンテンツとなる子要素を指定できる。オーバーレイを提供する`<ModalOverlay>`の子要素として`<ModalContent>`を与え、その子要素としてモーダルのコンテンツを与える。',
      defaultValue: '内容がテキストのみのモーダルです。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <Modal
      trigger={
        <Button onClick={action('onClick [モーダルを開くボタンが押されました。]')} {...args}>
          モーダルを開く
        </Button>
      }
    >
      <ModalOverlay>
        <ModalContent>
          <ModalTitle>本当に良いのですか？</ModalTitle>
          <ModalDescription>この動作をすると何かが起こります。画面外をクリックすると閉じることができます。</ModalDescription>
          <Button onClick={action('onClick [モーダルの中の確定ボタンが押されました。]')}>
            確定<span className="text-neutral-700">押しても閉じないよ</span>
          </Button>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  ),
};

export const WithButtonGroup: Story = {
  render: (args) => (
    <Modal
      trigger={
        <Button onClick={action('onClick [モーダルを開くボタンが押されました。]')} {...args}>
          モーダルを開く
        </Button>
      }
    >
      <ModalOverlay>
        <ModalContent>
          <ModalTitle>本当に良いのですか？</ModalTitle>
          <ModalDescription>この動作をすると何かが起こります。画面外をクリックすると閉じることができます。</ModalDescription>
          <ModalButtonGroup>
            <Button outlined className="border-error-500 text-error-500" onClick={action('onClick [モーダルの中のキャンセルボタンが押されました。]')}>
              キャンセル
            </Button>
            <Button outlined className="border-info-500 text-info-500" onClick={action('onClick [モーダルの中の変更ボタンが押されました。]')}>
              変更
            </Button>
            <Button className="col-span-2" onClick={action('onClick [モーダルの中の確定ボタンが押されました。]')}>
              確定<span className="text-neutral-700">押しても閉じないよ</span>
            </Button>
          </ModalButtonGroup>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  ),
};
export const WithPassedOpenProps: Story = {
  args: {
    trigger: <Button>モーダルを開く</Button>,
  },
};

export const WithCustomStyle: Story = {
  render: (args) => (
    <Modal
      trigger={
        <Button onClick={action('onClick [モーダルを開くボタンが押されました。]')} {...args}>
          モーダルを開く
        </Button>
      }
    >
      <ModalOverlay className="bg-gradient-to-br gradient-primary">
        <ModalContent className="bg-transparent text-white shadow-none">
          <ModalTitle>本当に良いのですか？</ModalTitle>
          <ModalDescription>この動作をすると何かが起こります。画面外をクリックすると閉じることができます。</ModalDescription>
          <Button onClick={action('onClick [モーダルの中の確定ボタンが押されました。]')}>
            確定<span className="text-neutral-700">押しても閉じないよ</span>
          </Button>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  ),
};
