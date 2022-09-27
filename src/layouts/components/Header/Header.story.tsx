// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { DiProvider, injectable } from 'react-magnetic-di';
import { RecoilRoot } from 'recoil';
import { Header } from './index';
import { useUserNavigationMenu } from '@/layouts/components/UserNavigationMenu/hooks/useUserNavigationMenu';

type Story = ComponentStoryObj<typeof Header>;

const injectedHooks = [
  injectable(useUserNavigationMenu, () => ({
    showAdminLink: true,
    userIconUrl: '/icons/fox.png',
    isLoggedIn: true,
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

export const Default: Story = {};
