import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { RadioButton, RadioButtonProps } from '../RadioButton';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  color: 'blue',
  size: 40,
  disabled: false,
};
