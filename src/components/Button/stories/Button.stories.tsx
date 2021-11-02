import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  variant: 'filled',
  children: 'Button',
};
