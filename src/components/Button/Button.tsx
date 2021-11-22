import * as colors from '@radix-ui/colors';
import * as React from 'react';

import * as S from './styled';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline' | 'text';
  size?: 'large' | 'medium';
  children: React.ReactNode;
  color?: keyof typeof colors;
}

export const Button = (props: ButtonProps) => {
  const {
    children,
    color = 'blue',
    size = 'medium',
    variant = 'filled',
    ...other
  } = props;

  return (
    <S.ButtonRoot color={color} variant={variant} size={size} {...other}>
      {children}
    </S.ButtonRoot>
  );
};
