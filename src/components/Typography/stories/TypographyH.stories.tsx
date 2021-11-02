import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { TypographyH, TypographyHProps } from '../Typography';

export default {
  title: 'Example/TypographyH',
  component: TypographyH,
} as Meta;

const Template: Story<TypographyHProps> = (args) => <TypographyH {...args} />;

export const Text = Template.bind({});

Text.args = {
  variant: 'h1',
  color: 'blackA',
  children: 'Header',
};
