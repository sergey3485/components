import * as React from 'react';
import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

const getColor = <C extends keyof typeof colors>(color: C, step: number) => {
  const saturation = `${color}${step}` as keyof typeof colors[C];
  return colors[color][saturation];
};

const size: Record<string, React.CSSProperties> = {
  large: {
    height: 40,
    padding: '6px 16px',
  },

  medium: {
    height: 28,
    padding: '6px 12px',
  },
};

export interface ButtonRootProps {
  size: 'large' | 'medium';
  variant: 'filled' | 'outline' | 'text';
  color: keyof typeof colors;
}

export const ButtonRoot = styled.button<ButtonRootProps>((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  borderRadius: 4,
  margin: 0,
  outline: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',

  ...size[props.size],

  ...(props.variant === 'filled' && {
    backgroundColor: getColor(props.color, 9),

    '&:hover': {
      backgroundColor: getColor(props.color, 10),
    },

    '&:active': {
      backgroundColor: getColor(props.color, 11),
    },

    '&:disabled': {
      color: getColor('gray', 11),
      backgroundColor: getColor('gray', 6),
      cursor: 'default',
    },
  }),

  ...(props.variant === 'outline' && {
    border: '1px solid',

    '&:hover': {
      borderColor: getColor(props.color, 8),
    },

    '&:active': {
      backgroundColor: getColor(props.color, 3),
    },

    '&:disabled': {
      color: getColor('gray', 11),
      borderColor: getColor('gray', 6),
      cursor: 'default',
    },
  }),

  ...(props.variant === 'text' && {
    border: 'none',

    '&:hover': {
      backgroundColor: getColor(props.color, 4),
    },

    '&:active': {
      backgroundColor: getColor(props.color, 5),
    },

    '&:disabled': {
      color: getColor('gray', 11),
      backgroundColor: 'transparent',
      cursor: 'default',
    },
  }),
}));