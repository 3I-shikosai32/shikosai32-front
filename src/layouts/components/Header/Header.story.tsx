// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';
import { RecoilRoot } from 'recoil';
import { Header } from './index';
import { AudioControlMenu } from '@/layouts/components/AudioControlMenu';
import { AudioControlMenuContainer } from '@/layouts/components/AudioControlMenu/container';
import { UserNavigationMenu } from '@/layouts/components/UserNavigationMenu';
import { UserNavigationMenuContainer } from '@/layouts/components/UserNavigationMenu/container';

type Story = ComponentStoryObj<typeof Header>;

const audioControlProps = {
  name: '栄の活躍:Remix',
  composers: [
    {
      name: '酒井晴渚',
      social: 'https://example.com',
    },
  ],
  isPlaying: true,
  setIsPlaying: () => {},
};

const injectedComponents = [
  injectable(UserNavigationMenuContainer, () => <UserNavigationMenu />),
  injectable(AudioControlMenuContainer, (props) => <AudioControlMenu {...audioControlProps} {...props} />),
];

const meta: ComponentMeta<typeof Header> = {
  component: Header,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>, (story) => <DiProvider use={injectedComponents}>{story()}</DiProvider>],
  argTypes: {
    className: {
      description: '`position: sticky`やサイズの変更のために指定できます。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
