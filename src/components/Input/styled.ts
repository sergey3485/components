import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

const getColor = <C extends keyof typeof colors>(color: C, step: number) => {
  const saturation = `${color}${step}` as keyof typeof colors[C];
  return colors[color][saturation];
};

export interface HelperProps {
  color: keyof typeof colors;
  error: boolean;
}

export interface InputTitelProps {
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

export const InputTitel = styled.span<InputTitelProps>((props) => ({
  fontSize: '8px',
  color: getColor(props.color, 11),
}));
