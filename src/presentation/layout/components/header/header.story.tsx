// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';
import { RecoilRoot } from 'recoil';
import { Header } from './header.component';
import { useAudioControlMenu } from '@/presentation/layout/components/audio-control-menu/hook/use-audio-control-menu.hook';
import { useUserNavigationMenu } from '@/presentation/layout/components/user-navigation-menu/hook/use-user-navigation-menu.hook';

type Story = ComponentStoryObj<typeof Header>;

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

const meta: ComponentMeta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>, (story) => <DiProvider use={injectedHooks}>{story()}</DiProvider>],
  argTypes: {
    className: {
      description: '`position: sticky`やサイズの変更のために指定できます。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {
  render: (args) => <Header {...args} />,
};
