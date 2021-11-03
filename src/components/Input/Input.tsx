import * as React from 'react';
import * as colors from '@radix-ui/colors';
import * as S from './styled';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof typeof colors;
  variant?: 'filled' | 'outline';
}

export const Input = (props: InputProps) => {
  const {
    color = 'blackA',
    variant = 'outline',
    ...other
  } = props;
  return <S.InputRoot color={color} variant={variant} {...other} />;
};
