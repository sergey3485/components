import styled from 'styled-components';
import * as colors from '@radix-ui/colors';
import { getColor } from '../../utils/colors';

export interface CheckboxRootContainerProps {
  color: keyof typeof colors;
  size: number;
  disabled?: boolean;
}

export interface CheckboxRootProps {
  size: number;
}

export const CheckboxRoot = styled.input<CheckboxRootProps>((props) => ({
  padding: 0,
  outline: 0,
  backgroundColor: 'transparent',
  color: 'inherit',
  width: `${props.size}px`,
  height: `${props.size}px`,
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
}));

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
  },

  [`${CheckboxRoot}:disabled + &`]: {
    color: getColor('gray', 11),
    backgroundColor: 'none',
  },
}));

export const CheckboxCircuit = styled.div<CheckboxRootContainerProps>((props) => ({
  display: 'flex',
  margin: 0,
  padding: 0,
  background: 'inherit',
  border: '1px solid',
  borderColor: getColor(props.color, 9),
  width: `${props.size}px`,
  height: `${props.size}px`,

  [`${CheckboxRoot}:disabled + &`]: {
    borderColor: getColor('gray', 4),
  },
}));
