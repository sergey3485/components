import * as colors from '@radix-ui/colors';

import * as S from './styled';
import { InputBaseProps } from '../InputBase';

export interface InputProps extends InputBaseProps{
  variant: 'text' | 'outline' | 'filled';
  color?: keyof typeof colors;
  inputLabel?: string;
  helper?: string;
  error?: boolean;
}

export const Input = (props: InputProps) => {
  const {
    variant = 'outline',
    color = 'blackA',
    helper,
    inputLabel,
    error = false,
    ...other
  } = props;
  return (
    <S.Container>
      {inputLabel && (
        <S.InputTitle color={color}>
          {inputLabel}
        </S.InputTitle>
      )}
      <S.InputElement color={color} variant={variant} {...other} />
      {helper && (
        <S.Helper error={error} color={color}>
          {helper}
        </S.Helper>
      )}
    </S.Container>
  );
};
