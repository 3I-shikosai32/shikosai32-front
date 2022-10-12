// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';
import { RecoilRoot } from 'recoil';

import { Layout } from './layout.container';
import { useAudioControlMenu } from '@/presentation/layout/component/audio-control-menu/hook/use-audio-control-menu.hook';
import { useUserNavigationMenu } from '@/presentation/layout/component/user-navigation-menu/hook/use-user-navigation-menu.hook';

type Story = ComponentStoryObj<typeof Layout>;

const injectedHooks = [
  injectable(useUserNavigationMenu, () => ({
    showAdminLink: true,
    userIconUrl: '/icons/fox.png',
    isLoggedIn: true,
  })),
  injectable(useAudioControlMenu, () => ({
    isPlaying: false,
    onPlay: () => {},
    onPause: () => {},
    name: '曲の名前',
    composers: [
      {
        name: '作曲者名',
      },
    ],
    duration: 100,
    currentTime: 0,
  })),
];

const meta: ComponentMeta<typeof Layout> = {
  component: Layout,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>, (story) => <DiProvider use={injectedHooks}>{story()}</DiProvider>],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Hello Title',
    children: '',
  },
  argTypes: {
    title: {
      description: 'ページのタイトルを指定する。',
      control: { type: 'text' },
    },
    children: {
      description: 'このレイアウトが持つ子要素を指定できる。',
      control: { type: 'none' },
    },
  },
};

export default meta;

export const Default: Story = {};
export const WithContent: Story = {
  args: {
    children: (
      <div className="max-w-2xl p-4">
        <h1 className="py-6 font-branding text-4xl font-bold">Lorem ipsum</h1>
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
        <h1 className="py-6 font-branding text-4xl font-bold">ポラーノの広場</h1>
        そのころわたくしは、モリーオ市の博物局に勤めて居りました。
        十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給ほうきゅうもほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。殊にそのころ、モリーオ市では競馬場を植物園に拵こしらえ直すというので、その景色のいいまわりにアカシヤを植え込んだ広い地面が、切符売場や信号所の建物のついたまま、わたくしどもの役所の方へまわって来たものですから、わたくしはすぐ宿直という名前で月賦で買った小さな蓄音器と二十枚ばかりのレコードをもって、その番小屋にひとり住むことになりました。わたくしはそこの馬を置く場所に板で小さなしきいをつけて一疋の山羊を飼いました。毎朝その乳をしぼってつめたいパンをひたしてたべ、それから黒い革のかばんへすこしの書類や雑誌を入れ、靴もきれいにみがき、並木のポプラの影法師を大股にわたって市の役所へ出て行くのでした。
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
      </div>
    ),
  },
};
