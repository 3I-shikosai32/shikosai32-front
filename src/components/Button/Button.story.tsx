import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from './index';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Opaque: ComponentStory<typeof Button> = () => <Button text="ここをクリックする" onClick={() => {}} />;
Opaque.storyName = '塗りつぶし型の見た目のボタン';
