// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { AudioControlMenu } from './audio-control-menu.component';

type Story = ComponentStoryObj<typeof AudioControlMenu>;

const meta: ComponentMeta<typeof AudioControlMenu> = {
  component: AudioControlMenu,
  args: {
    name: '栄の活躍:Remix',
    composers: [
      {
        name: '酒井晴渚',
        social: 'https://example.com',
      },
    ],
    isPlaying: true,
    duration: 622,
    currentTime: 23,
  },
  argTypes: {
    className: {
      description: 'メニューを開くボタンのサイズ等のスタイルを変更するために用意されている。`aspect-square`で縦横比が1:1に固定されています。',
      control: { type: 'text' },
    },
    viewportClassName: {
      description:
        '`<NavigationMenu>`参照。吹き出しメニュー`<NavigationContent>`を挿入する先の親要素のスタイルを変更するために使用できる。例えば、`left: 0; justify-content: start;` `right: 0; justify-content: end;`を設定することで、吹き出しメニューのよる方向を変更できる。また、親である`<NavigationMenu>`の幅よりも大きい`width`を設定したい場合にも`w-48`等で使用できる。',
      control: { type: 'text' },
    },
    name: {
      description: '現在読み込まれている曲の名前',
      control: { type: 'text' },
    },
    composers: {
      description: '現在読み込まれている曲の作曲者',
      control: { type: 'none' },
    },
    isPlaying: {
      description: '現在再生中かどうか',
      control: { type: 'boolean' },
    },
    onPlay: {
      description: '停止中に再生ボタンが押されたときに呼び出されるイベントハンドラを指定できる。',
      control: { type: 'none' },
    },
    onPause: {
      description: '再生中に再生ボタンが押されたときに呼び出されるイベントハンドラを指定できる。',
      control: { type: 'none' },
    },
    duration: {
      description: '現在読み込まれている曲の長さを秒単位で指定する。',
      control: { type: 'number' },
    },
    currentTime: {
      description: '現在読み込まれている曲の再生位置を秒単位で指定する。',
      control: { type: 'number' },
    },
  },
};

export default meta;

export const Default: Story = {};

export const WithMultipleComposers: Story = {
  args: {
    composers: [
      {
        name: '酒井晴渚',
        social: 'https://example.com',
      },
      {
        name: '酒井晴渚',
      },
    ],
  },
};
