import * as React from 'react';
import * as colors from '@radix-ui/colors';
import * as S from './styled';

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof typeof colors;
  variant?: 'outline' | 'text' | 'filled';
  placeHolder?: string;
  leftSideAddition?: React.ReactNode;
  rightSideAddition?: React.ReactNode;
}

export const InputBase = (props: InputBaseProps) => {
  const {
    color = 'blackA',
    variant = 'outline',
    placeHolder = 'type some text',
    leftSideAddition,
    rightSideAddition,
    ...other
  } = props;
  return (

    <S.InputBaseContainer variant={variant} color={color}>

      {leftSideAddition}

      <S.InputRoot {...other} placeholder={placeHolder} />

      {rightSideAddition}

    </S.InputBaseContainer>
  );
};
