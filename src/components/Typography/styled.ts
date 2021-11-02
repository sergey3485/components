import * as React from 'react';
import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

const getColor = <C extends keyof typeof colors>(color: C, step: number) => {
  const saturation = `${color}${step}` as keyof typeof colors[C];
  return colors[color][saturation];
};

const size: Record<string, React.CSSProperties> = {
  large: {
    fontSize: 20,
    lineHeight: '32px',
    margin: '0',
    padding: '0',
  },

  medium: {
    fontSize: 16,
    lineHeight: '24px',
    margin: '0',
    padding: '0',
  },

  small: {
    fontSize: 15,
    lineHeight: '20px',
    margin: '0',
    padding: '0',
  },
};

const variantsH: Record<string, React.CSSProperties> = {
  h1: {
    fontSize: 96,
    lineHeight: '116px',
    margin: '0',
    padding: '0',
  },

  h2: {
    fontSize: 60,
    lineHeight: '72px',
    margin: '0',
    padding: '0',
  },

  h3: {
    fontSize: 48,
    lineHeight: '60px',
    margin: '0',
    padding: '0',
  },
  h4: {
    fontSize: 34,
    lineHeight: '44px',
    margin: '0',
    padding: '0',
  },
  h5: {
    fontSize: 24,
    lineHeight: '36px',
    margin: '0',
    padding: '0',
  },
  h6: {
    fontSize: 20,
    lineHeight: '30px',
    margin: '0',
    padding: '0',
  },
};

export const Typo = styled.h1<{ variant: string; color: keyof typeof colors }>((props) => ({
  ...variantsH[props.variant],
  color: getColor(props.color, 11),
}));

export const Text = styled.span<{ size: string; color: keyof typeof colors }>((props) => ({
  ...size[props.size],
  color: getColor(props.color, 11),
}));
