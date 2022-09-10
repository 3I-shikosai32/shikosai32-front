import type { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import Toggle from ".";


type Story = ComponentStoryObj<typeof Toggle>;

const meta: ComponentMeta<typeof Toggle> = {
	component: Toggle,
	argTypes:{
		color:{
			description:'bg-gray-500のようにして指定する'
		},
		size:{
			description:'small,mid,largeから選択する',
			options: ['small', 'mid', 'large'],
            control: { type: 'radio' },
		}
	}
}


export default meta;

export const Default: Story = {
	args: {

	},
  };