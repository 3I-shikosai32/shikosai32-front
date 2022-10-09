// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { HiUserCircle } from 'react-icons/hi';
import { Link, LinkIcon } from './index';

type Story = ComponentStoryObj<typeof Link>;

const meta: ComponentMeta<typeof Link> = {
  component: Link,
  argTypes: {
    href: {
      description:
        '`next/link`の`<Link>`準拠。リンク先のURL。必須。**このコンポーネントはただのスタイル付きのラッパーなので、この他にも`next/link`の`<Link>`と同じpropsがすべて使用可能。**',
      control: { type: 'text' },
    },
    children: {
      description:
        'リンクとして表示されるテキスト。このテキストにアイコンを付随させるために`<LinkIcon>`を子要素として与えられる。**`<LinkIcon>`には`react-icon`のアイコンコンポーネントを唯一の子要素として与えてください。**',
      control: { type: 'text' },
    },
    className: {
      description:
        '文字色や大きさなどを変更するために用意されている。アイコン`<LinkIcon>`の大きさはテキストの大きさに合わせて変化するので、アイコンの大きさも変えたい場合でも`text-sm`などテキストの大きさのみの指定で可。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    href: '/',
    children: 'ここをクリックしてリンク先を訪れる',
  },
};

export const WithIcon: Story = {
  args: {
    href: '/',
    className: 'text-info-700',
  },
  render: (args) => (
    <Link {...args}>
      <LinkIcon>
        <HiUserCircle />
      </LinkIcon>
      あなたのプロフィール
    </Link>
  ),
};

export const WithLargeText: Story = {
  args: {
    href: '/',
    className: 'text-4xl',
  },
  render: (args) => (
    <Link {...args}>
      <LinkIcon>
        <HiUserCircle />
      </LinkIcon>
      あなたのプロフィール
    </Link>
  ),
};
