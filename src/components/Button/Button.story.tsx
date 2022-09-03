import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from './index';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Opaque = Template.bind({});
Opaque.args = {
  text: 'ボタン',
  onClick: () => {},
};
Opaque.storyName = '塗りつぶし型の見た目のボタン';
