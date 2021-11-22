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

export const RadioButtonRoot = styled.input({
  padding: 0,
  outline: 0,
  backgroundColor: 'transparent',
  color: 'inherit',
  width: '75%',
  height: '75%',
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

export const RadioButtonContainer = styled.div<CheckboxRootContainerProps>((props) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  color: getColor(props.color, 10),
  position: 'absolute',
  width: props.size,
  height: props.size,
  borderRadius: '50%',

  '&:hover': {
    backgroundColor: props.disabled ? 'none' : getColor(props.color, 3),
    color: getColor('gray', 11),
  },
  '> &': {
    color: 'inherit',
  },
}));
