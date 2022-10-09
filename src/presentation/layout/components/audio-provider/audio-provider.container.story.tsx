import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { AudioProviderContainer } from './audio-provider.container';
import { AudioControlMenuContainer } from '@/presentation/layout/components/audio-control-menu/audio-control-menu.container';

type Story = ComponentStoryObj<typeof AudioProviderContainer>;

const meta: ComponentMeta<typeof AudioProviderContainer> = {
  component: AudioProviderContainer,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
  argTypes: {
    children: {
      description: '子要素を指定します。',
      control: { type: 'none' },
    },
  },
  args: {
    children: <AudioControlMenuContainer />,
  },
};

export default meta;

export const WithUI: Story = {};
