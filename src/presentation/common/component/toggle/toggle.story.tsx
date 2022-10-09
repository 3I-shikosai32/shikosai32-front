// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import Toggle from './toggle.component';

type Story = ComponentStoryObj<typeof Toggle>;

const meta: ComponentMeta<typeof Toggle> = {
  component: Toggle,
  args: {
    onChange: action('onChange'),
  },
  argTypes: {
    color: {
      description: 'bg-gray-500のようにして指定する',
    },
    size: {
      description: 'small,mid,largeから選択する',
      options: ['small', 'mid', 'large'],
      control: { type: 'radio' },
    },
    checked: {
      description: 'small,mid,largeから選択する',
      control: { type: 'boolean' },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
