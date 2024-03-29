import styled from 'styled-components';
import * as colors from '@radix-ui/colors';

import { getColor } from '../../utils/colors';

export interface CheckboxRootContainerProps {
  color: keyof typeof colors;
  size: number;
  disabled: boolean;
}

export interface CheckboxCircuitProps {
  color: keyof typeof colors;
}

export const CheckboxRoot = styled.input({
  padding: 0,
  outline: 0,
  backgroundColor: 'transparent',
  color: 'inherit',
  width: '50%',
  height: '50%',
  borderRadius: '4px',
  opacity: 0,
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  zIndex: 1,
  cursor: 'pointer',

  '&: disabled': {
    cursor: 'default',
  },
});

export const CheckboxRootContainer = styled.div<CheckboxRootContainerProps>((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  color: getColor(props.color, 10),
  position: 'absolute',
  width: `${props.size}px`,
  height: `${props.size}px`,

  '&:hover': {
    backgroundColor: props.disabled ? 'none' : getColor(props.color, 3),
    color: getColor('gray', 11),
  },
}));

export const CheckboxCircuit = styled.div<CheckboxCircuitProps>((props) => ({
  display: 'flex',
  margin: 0,
  padding: 0,
  background: 'inherit',
  border: '1px solid',
  borderColor: getColor(props.color, 9),
  width: '50%',
  height: '50%',

  [`${CheckboxRoot}:disabled + &`]: {
    borderColor: getColor('gray', 4),
  },
}));
