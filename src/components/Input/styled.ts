import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

const getColor = <C extends keyof typeof colors>(color: C, step: number) => {
  const saturation = `${color}${step}` as keyof typeof colors[C];
  return colors[color][saturation];
};

export interface InputRootProps {
  variant: 'filled' | 'outline';
  color: keyof typeof colors;
}

export const InputRoot = styled.input<InputRootProps>((props) => ({
  margin: 0,
  outline: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: '6px 12px 6px 12px',
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
}));
