import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

import { getColor } from '../../utils/colors';
import { InputBase } from '../InputBase';

export interface HelperProps {
  color: keyof typeof colors;
  error: boolean;
}

export interface InputBaseContainerProps {
  color: keyof typeof colors;
  variant: 'filled' | 'text' | 'outline';
}

export interface InputTitleProps {
  color: keyof typeof colors;
}

export const Container = styled.div({
  margin: 0,
  outline: 0,
  backgroundColor: 'transparent',
  padding: '6px 12px 6px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  border: 'none',
});

export const Helper = styled.span<HelperProps>((props) => ({
  fontSize: '8px',
  ...(props.error === false && {
    color: getColor('red', 11),
  }),
  ...(props.error === true && {
    color: getColor(props.color, 11),
  }),
}));

export const InputTitle = styled.span<InputTitleProps>((props) => ({
  fontSize: '8px',
  color: getColor(props.color, 11),
}));

export const InputElement = styled(InputBase)<InputBaseContainerProps>((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: '4px',

  ...(props.variant === 'filled' && {
    backgroundColor: getColor(props.color, 9),
    color: getColor('whiteA', 12),
    border: 'none',

    '&:focus': {
      backgroundColor: getColor(props.color, 10),
    },
  }),

  ...(props.variant === 'outline' && {
    border: '1px solid',
    borderColor: getColor(props.color, 8),
    color: getColor(props.color, 10),

    '&:focus': {
      borderColor: getColor(props.color, 9),
    },
  }),
  ...(props.variant === 'text' && {
    border: 'none',
    color: getColor(props.color, 10),
  }),

}));
