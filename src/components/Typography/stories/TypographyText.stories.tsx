import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { Paragraph, ParagraphProps } from '../Typography';

export default {
  title: 'Example/TypographyText',
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Text = Template.bind({});

Text.args = {
  size: 'medium',
  color: 'blackA',
  children: 'Text',
};
