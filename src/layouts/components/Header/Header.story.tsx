// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';
import { RecoilRoot } from 'recoil';
import { Header } from './index';
import { useAudioControlMenu } from '@/layouts/components/AudioControlMenu/hooks/useAudioControlMenu';
import { useUserNavigationMenu } from '@/layouts/components/UserNavigationMenu/hooks/useUserNavigationMenu';

type Story = ComponentStoryObj<typeof Header>;

const injectedHooks = [
  injectable(useUserNavigationMenu, () => ({
    showAdminLink: true,
    userIconUrl: '/icons/fox.png',
    isLoggedIn: true,
  })),
  injectable(useAudioControlMenu, () => ({
    isPlaying: false,
    setIsPlaying: () => {},
    name: '曲の名前',
    composers: [
      {
        name: '作曲者名',
      },
    ],
  })),
];

const meta: ComponentMeta<typeof Header> = {
  component: Header,
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
