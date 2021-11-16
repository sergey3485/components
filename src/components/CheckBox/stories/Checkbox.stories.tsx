import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { Checkbox, CheckboxProps } from '../Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  color: 'blue',
  size: 40,
  disabled: true,
};
