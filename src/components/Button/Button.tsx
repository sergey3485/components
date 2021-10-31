import * as colors from '@radix-ui/colors';
import * as React from 'react';
import * as S from './styled';

export interface ButtonProps {
  variants: 'filled' | 'outline' | 'text';
  size: 'large' | 'medium';
  children: React.ReactNode;
  color: keyof typeof colors;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    color,
    size = 'medium',
    variants = 'filled',
  } = props;

  return (
    <S.ButtonRoot color={color} variant={variants} size={size}>
      {children}
    </S.ButtonRoot>
  );
};
