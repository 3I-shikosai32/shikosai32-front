import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { AudioProvider } from './index';
import { audioResources } from '@/state/audio/audioResource';

type Story = ComponentStoryObj<typeof AudioProvider>;

const meta: ComponentMeta<typeof AudioProvider> = {
  component: AudioProvider,
  argTypes: {
    children: {
      description: '子要素を指定します。',
      control: { type: 'none' },
    },
    audioResource: {
      description: '再生する曲の情報を表す`AudioResource`オブジェクトを指定します。',
      control: { type: 'object' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    audioResource: audioResources[0],
  },
  render: (args) => <AudioProvider {...args} />,
};
