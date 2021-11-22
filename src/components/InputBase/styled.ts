import styled from 'styled-components';

import { getColor } from '../../utils/colors';

export const InputRoot = styled.input({
  margin: 0,
  outline: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  padding: '6px 12px 6px 12px',
  border: 'none',
  color: 'inherit',
  fontSize: 'inherit',
});

export const InputBaseContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  color: getColor('blackA', 10),
  fontSize: '16px',
});

export const LeftSide = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: 'inheritet',
  marginLeft: '8px',
  color: 'inherit',
});

export const RightSide = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: 'inheritet',
  marginRight: '8px',
  color: 'inherit',
});
