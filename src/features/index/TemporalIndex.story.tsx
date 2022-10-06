// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { TemporalIndex } from './TemporalIndex';

type Story = ComponentStoryObj<typeof TemporalIndex>;

const meta: ComponentMeta<typeof TemporalIndex> = {
  component: TemporalIndex,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      description: '`padding`等の調整のために公開されていますが、基本的には使用しないことが好ましいです。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
