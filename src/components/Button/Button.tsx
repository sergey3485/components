import * as React from 'react';
import styled, { CSSProperties } from 'styled-components';

export interface ButtonProps {
  variant: 'large' | 'medium';
  children: React.ReactNode;
  color: string;
  border: 'on' | 'off';
  shadow: 0 | 1 | 2;
  backgroundColor: string;
  borderColor: string;
}

const varuaints: Record<string, CSSProperties> = {
  large: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: 'black',
    border: 'solid 1px black',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 4,
  },

  medium: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: 'black',
    border: '1px solid black',
    backgroundColor: 'white',
    height: 28,
    borderRadius: 4,
  },
};

const Button = styled.button<{ variant: string }>((props) => ({
  ...varuaints[props.variant],
  ...props.style,
}));

export const button = (props: ButtonProps) => {
  const {
    children,
    color,
    variant = 'medium',
    border,
    shadow,
    borderColor,
    backgroundColor,
  } = props;

  const style = {
    border: border === 'on' ? '1px solid' : 'none',
    boxShadow: `0px ${shadow * 2}px ${shadow * 4}px`,
    color,
    borderColor,
    backgroundColor,
  };

  return (
    <Button color={color} variant={variant} style={style}>
      {children}
    </Button>
  );
};
