import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { Input, InputProps } from '../Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  variant: 'text',
  color: 'blue',
  inputLabel: 'input',
};
