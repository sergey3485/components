import * as React from 'react';
import * as colors from '@radix-ui/colors';

import * as S from './styled';
import { InputBase } from '../InputBase';

export interface InputProps {
  variant: 'text' | 'outline' | 'filled';
  color?: keyof typeof colors;
  contentColor?: keyof typeof colors;
  inputLabel?: string;
  helper?: string;
  error?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    variant = 'outline',
    color = 'whiteA',
    contentColor = 'blackA',
    helper,
    inputLabel,
    error = false,
  } = props;
  return (
    <S.Container>
      {inputLabel && (
        <S.InputTitle color={color}>
          {inputLabel}
        </S.InputTitle>
      )}
      <InputBase type="text" color={contentColor} variant={variant} />
      {helper && (
        <S.Helper error={error} color={color}>
          {helper}
        </S.Helper>
      )}
    </S.Container>
  );
};
