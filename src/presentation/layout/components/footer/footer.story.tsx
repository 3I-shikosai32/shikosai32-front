// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';

import { Footer } from './footer.component';

type Story = ComponentStoryObj<typeof Footer>;

const meta: ComponentMeta<typeof Footer> = {
  component: Footer,
  argTypes: {
    className: {
      description: '`position: sticky`やサイズの変更のために指定できます。',
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: Story = {};
