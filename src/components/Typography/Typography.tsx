import * as React from 'react';
import * as colors from '@radix-ui/colors';
import { Text, Typo } from './styled';

export interface TypographyHProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color: keyof typeof colors;
  children: React.ReactNode;
}

export interface TypographyTextProps {
  variant: 'large' | 'medium' | 'small';
  color: keyof typeof colors;
  children: React.ReactNode;
}

export const TypographyText = (props: TypographyTextProps) => {
  const { variant = 'medium', color, children } = props;
  return (
    <Text variant={variant} color={color}>
      {children}
    </Text>
  );
};

export const TypographyH = (props: TypographyHProps) => {
  const { variant = 'h1', color, children } = props;

  return (
    <Typo as={variant} variant={variant} color={color}>
      {children}
    </Typo>
  );
};
