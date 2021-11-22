import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { Heading, HeadingProps } from '../Typography';

export default {
  title: 'Example/TypographyH',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Text = Template.bind({});

Text.args = {
  variant: 'h1',
  color: 'blackA',
  children: 'Header',
};
