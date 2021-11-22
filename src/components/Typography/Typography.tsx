import * as React from 'react';
import * as colors from '@radix-ui/colors';

import { Text, Typo } from './styled';

export interface HeadingProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: keyof typeof colors;
  children: React.ReactNode;
}

export interface ParagraphProps {
  size?: 'large' | 'medium' | 'small';
  color?: keyof typeof colors;
  children: React.ReactNode;
}

export const Paragraph = (props: ParagraphProps) => {
  const { size = 'medium', color = 'blackA', children } = props;
  return (
    <Text size={size} color={color}>
      {children}
    </Text>
  );
};

export const Heading = (props: HeadingProps) => {
  const { variant = 'h1', color = 'blackA', children } = props;

  return (
    <Typo as={variant} variant={variant} color={color}>
      {children}
    </Typo>
  );
};
