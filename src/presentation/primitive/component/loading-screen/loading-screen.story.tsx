// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { LoadingScreen } from './loading-screen.presenter';

type Story = ComponentStoryObj<typeof LoadingScreen>;

const meta: ComponentMeta<typeof LoadingScreen> = {
  component: LoadingScreen,
  argTypes: {
    className: {
      description:
        '大きさを変更するためにクラスを指定できる。その際は指定された横幅に合わせてアスペクト比を保ったまま画像の大きさが変更される (e.g. `max-w-sm w-full`)',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
