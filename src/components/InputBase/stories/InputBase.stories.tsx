import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { InputBase, InputBaseProps } from '../InputBase';

export default {
  title: 'Example/InputBase',
  component: InputBase,
} as Meta;

const Template: Story<InputBaseProps> = (args) => <InputBase {...args} />;

export const Filled = Template.bind({});
