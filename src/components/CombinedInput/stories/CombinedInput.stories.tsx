import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import { CombinedInput, CombinedInputProps } from '../CombinedInput';

export default {
  title: 'Example/CombinedInput',
  component: CombinedInput,
} as Meta;

const Template: Story<CombinedInputProps> = (args) => <CombinedInput {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  variant: 'filled',
  color: 'blue',
  contentColor: 'whiteA',
};
