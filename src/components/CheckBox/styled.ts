import styled from 'styled-components';
import * as colors from '@radix-ui/colors';
import { getColor } from '../../utils/colors';

export interface CheckBoxRootProps {
  color: keyof typeof colors;
}

export const CheckBoxRoot = styled.input.attrs<CheckBoxRootProps>((props) => ({
  type: 'checkBox',
  color: getColor(props.color, 9),
}));

export const CheckBoxContainer = styled.div;
