import * as React from 'react';
import styled from 'styled-components';

export interface TypographyHProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  children: React.ReactNode;
}

export interface TypographyTextProps {
  variant: 'large' | 'medium' | 'small';
  color?: string;
  children: React.ReactNode;
}

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

// const h1 = styled.h1({
//   color: 'black',
//   fontsize: '96px',
//   lineHeight: '116px'
// });

// const h2 = styled.h2({
//   color: 'black',
//   fontsize: '60px',
//   lineHeight: '72px'
// });

// const h3 = styled.h3({
//   color: 'black',
//   fontsize: '48px',
//   lineHeight: '60px'
// });

// const h4 = styled.h4({
//   color: 'black',
//   fontsize: '34px',
//   lineHeight: '44px'
// });

// const h5 = styled.h5({
//   color: 'black',
//   fontsize: '24px',
//   lineHeight: '36px'
// });

// const h6 = styled.h6({
//   color: 'black',
//   fontsize: '20px',
//   lineHeight: '30px'
// });

// const Typo = styled.h1<{ variant: string; color: string; }>`
//   ${(props) => variants[props.variant]}

//   color: ${(props) => props.color};
// `;

const Typo = styled.h1<{ variant: string; color: string }>((props) => ({
  ...variantsH[props.variant],
  color: props.color,
}));

const Text = styled.span<{ variant: string }>((props) => ({
  ...variantsText[props.variant],
  color: props.color,
}));

export const TypographyText = (props: TypographyTextProps) => {
  const { variant = 'medium', color, children } = props;
  return (
    <Text variant={variant} color={color}>
      {children}
    </Text>
  );
};

export const TypographyH = (props: TypographyHProps) => {
  const { variant = 'h1', color = 'black', children } = props;

  return (
    <Typo as={variant} variant={variant} color={color}>
      {children}
    </Typo>
  );
};
