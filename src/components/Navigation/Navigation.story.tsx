// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { NavigationMenu, NavigationItem, NavigationTrigger, NavigationContent, NavigationLink } from '.';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

type Story = ComponentStoryObj<typeof NavigationMenu>;

const meta: ComponentMeta<typeof NavigationMenu> = {
  component: NavigationMenu,
  argTypes: {
    className: {
      description:
        'ナヴィゲーションバーの項目`<NavigationItem>`を持ち並べている親要素のスタイルを変更するために、`gap-4`等のクラス名を与えることができる。**吹き出しメニューの表示位置の基準をこのコンポーネントと定めている`position: relative`の設定は上書きしないでください。**',
      control: { type: 'text' },
    },
    viewportClassName: {
      description:
        '選択されている項目の吹き出しメニュー`<NavigationContent>`を挿入する先の親要素のスタイルを変更するために使用できる。例えば、`left: 0; justify-content: start;` `right: 0; justify-content: end;`を設定することで、吹き出しメニューのよる方向を変更できる。また、親である`<NavigationMenu>`の幅よりも大きい`width`を設定したい場合にも`w-48`等で使用できる。',
      control: { type: 'text' },
    },
    children: {
      description: 'このナヴィゲーションバーが持つ項目となる子要素を`<NavigationItem>`を与えることにより指定できる。',
      control: { type: 'none' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    className: 'justify-center bg-white',
    viewportClassName: '',
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationItem>
        <NavigationTrigger>
          <div className="flex px-4 py-2 font-bold">
            <NavigationLink>
              <a href="https://example.com/">Games</a>
            </NavigationLink>
          </div>
        </NavigationTrigger>
        <NavigationContent className="bg-gradient-to-br font-bold text-white gradient-game">
          Xeno, Ice Raze, 大富豪などの6種のゲームで遊びましょう！
        </NavigationContent>
      </NavigationItem>
      <NavigationItem>
        <NavigationTrigger>
          <div className="flex px-4 py-2 font-bold">
            <NavigationLink>
              <a href="https://example.com/">Ranking</a>
            </NavigationLink>
          </div>
        </NavigationTrigger>
        <NavigationContent className="bg-gradient-to-br font-bold text-white gradient-ranking">あなたの順位がわかります！</NavigationContent>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink>
          <div className="flex px-4 py-2 font-bold">
            <a href="https://example.com/">Staff</a>
          </div>
        </NavigationLink>
      </NavigationItem>
    </NavigationMenu>
  ),
};

export const IconMenu: Story = {
  args: {
    viewportClassName: 'left-0 justify-start w-48',
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationItem>
        <NavigationTrigger>
          <Button ghost className="p-0">
            <Icon src="/icons/fox.png" />
          </Button>
        </NavigationTrigger>
        <NavigationContent>
          ユーザーの情報を確認しましょう。
          <NavigationLink>
            <a href="https://example.com/">リンク</a>
          </NavigationLink>
        </NavigationContent>
      </NavigationItem>
    </NavigationMenu>
  ),
};
