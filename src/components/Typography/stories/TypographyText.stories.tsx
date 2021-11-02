import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { TypographyText, TypographyTextProps } from '../Typography';

export default {
  title: 'Example/TypographyText',
  component: TypographyText,
} as Meta;

const Template: Story<TypographyTextProps> = (args) => <TypographyText {...args} />;

export const Text = Template.bind({});

Text.args = {
  size: 'medium',
  color: 'blackA',
  children: 'Text',
};
