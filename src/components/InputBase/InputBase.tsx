import * as React from 'react';
import * as colors from '@radix-ui/colors';
import * as S from './styled';

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof typeof colors;
  variant?: 'filled' | 'outline' | 'text';
  placeHolder?: string;
}

export const InputBase = (props: InputBaseProps) => {
  const {
    color = 'blackA',
    variant = 'outline',
    placeHolder = 'type some text',
    ...other
  } = props;
  return <S.InputRoot color={color} variant={variant} {...other} placeholder={placeHolder} />;
};
