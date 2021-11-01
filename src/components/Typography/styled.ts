import * as React from 'react';
import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

const getColor = <C extends keyof typeof colors>(color: C, step: number) => {
  const saturation = `${color}${step}` as keyof typeof colors[C];
  return colors[color][saturation];
};

const variantsText: Record<string, React.CSSProperties> = {
  large: {
    fontSize: 20,
    lineHeight: '32px',
  },

  medium: {
    fontSize: 16,
    lineHeight: '24px',
  },

  small: {
    fontSize: 15,
    lineHeight: '20px',
  },
};

const variantsH: Record<string, React.CSSProperties> = {
  h1: {
    fontSize: 96,
    lineHeight: '116px',
  },

  h2: {
    fontSize: 60,
    lineHeight: '72px',
  },

  h3: {
    fontSize: 48,
    lineHeight: '60px',
  },
  h4: {
    fontSize: 34,
    lineHeight: '44px',
  },
  h5: {
    fontSize: 24,
    lineHeight: '36px',
  },
  h6: {
    fontSize: 20,
    lineHeight: '30px',
  },
};

export const Typo = styled.h1<{ variant: string; color: keyof typeof colors }>((props) => ({
  ...variantsH[props.variant],
  color: getColor(props.color, 11),
}));

export const Text = styled.span<{ variant: string; color: keyof typeof colors }>((props) => ({
  ...variantsText[props.variant],
  color: getColor(props.color, 11),
}));
