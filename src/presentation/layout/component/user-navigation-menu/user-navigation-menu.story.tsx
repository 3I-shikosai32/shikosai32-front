// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { UserNavigationMenu } from './user-navigation-menu.presenter';

type Story = ComponentStoryObj<typeof UserNavigationMenu>;

const meta: ComponentMeta<typeof UserNavigationMenu> = {
  component: UserNavigationMenu,
  args: {
    className: '',
    viewportClassName: '',
    userIconUrl: '/icons/fox.png',
    showAdminLink: true,
    isLoggedIn: true,
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
    userIconUrl: {
      description: 'ユーザーアイコンの画像パス。しかし、`StaticImport`で指定することはできない。',
      control: { type: 'text' },
    },
    showAdminLink: {
      description: '管理者用のリンクを表示するかどうかを指定できる。',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    isLoggedIn: {
      description: '表示を切り替えるためにログインしているかどうかを指定できる。',
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => <UserNavigationMenu {...args} />,
};
