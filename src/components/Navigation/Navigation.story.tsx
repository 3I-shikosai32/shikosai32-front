// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { NavigationMenu, NavigationViewport, NavigationList, NavigationItem, NavigationTrigger, NavigationContent, NavigationLink } from '.';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

type Story = ComponentStoryObj<typeof NavigationMenu>;

const meta: ComponentMeta<typeof NavigationMenu> = {
  component: NavigationMenu,
  argTypes: {
    defaultValue: {
      description: 'このナビゲーションバーの中で、初期状態のときに選ばれる項目`<NavigationItem>`の`value`を指定できる。',
      control: { type: 'text' },
    },
    value: {
      description:
        'このナビゲーションバーの中で、現在選ばれている項目`<NavigationItem>`の`value`を指定する。これを`props`に設定する場合は、`onValueChange`とともに設定する必要がある。',
      control: { type: 'text' },
    },
    onValueChange: {
      description:
        'このナビゲーションバーの中で、現在選ばれている項目`<NavigationItem>`が変わろうとしているときに、その`value`を受け取り呼び出されるイベントハンドラを指定する。これを`props`に設定する場合は、`value`とともに設定する必要がある。',
      control: { type: 'none' },
    },
    className: {
      description:
        'ナヴィゲーションバーの項目`<NavigationItem>`を持ち並べている親要素のスタイルを変更するために、`gap-4`等のクラス名を与えることができる。',
      control: { type: 'none' },
    },
    children: {
      description: 'このナヴィゲーションバーが持つ項目となる子要素を`<NavigationItem>`を与えることにより指定できる。',
      control: { type: 'none' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationList className="justify-center bg-white">
        <NavigationItem value="game">
          <NavigationTrigger>
            <div className="flex px-4 py-2 font-bold">Games</div>
          </NavigationTrigger>
          <NavigationContent className="bg-gradient-to-br font-bold text-white gradient-game">
            Xeno, Ice Raze, 大富豪などの6種のゲームで遊びましょう！
          </NavigationContent>
        </NavigationItem>
        <NavigationItem value="ranking">
          <NavigationTrigger>
            <div className="flex px-4 py-2 font-bold">Ranking</div>
          </NavigationTrigger>
          <NavigationContent className="bg-gradient-to-br font-bold text-white gradient-ranking">あなたの順位がわかります！</NavigationContent>
        </NavigationItem>
        <NavigationItem value="exchange">
          <NavigationTrigger>
            <div className="flex px-4 py-2 font-bold">Exchange</div>
          </NavigationTrigger>
          <NavigationContent className="bg-gradient-to-br font-bold text-white gradient-exchange">
            ゲームで獲得したポイントで、実物の景品と交換しましょう！
          </NavigationContent>
        </NavigationItem>
        <NavigationItem value="staff">
          <NavigationLink>
            <div className="flex px-4 py-2 font-bold">Staff</div>
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
      <NavigationViewport />
    </NavigationMenu>
  ),
};

export const IconMenu: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationList>
        <NavigationItem value="user">
          <NavigationTrigger>
            <Button ghost className="p-0">
              <Icon src="/icons/fox.png" />
            </Button>
          </NavigationTrigger>
          <NavigationContent>ユーザーの情報を確認しましょう。</NavigationContent>
        </NavigationItem>
      </NavigationList>
      <NavigationViewport className="w-72 max-w-sm" />
    </NavigationMenu>
  ),
};
