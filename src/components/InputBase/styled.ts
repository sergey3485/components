import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

const getColor = <C extends keyof typeof colors>(color: C, step: number) => {
  const saturation = `${color}${step}` as keyof typeof colors[C];
  return colors[color][saturation];
};

export interface InputBaseContainerProps {
  color: keyof typeof colors;
  variant: 'outline' | 'text' | 'filled';
}

export const InputRoot = styled.input({
  margin: 0,
  outline: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: '6px 12px 6px 12px',
  border: 'none',
});

export const InputBaseContainer = styled.div<InputBaseContainerProps>((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',

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
