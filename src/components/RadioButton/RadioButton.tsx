import * as React from 'react';
import * as colors from '@radix-ui/colors';

import { RiCheckboxBlankCircleLine, RiRadioButtonLine } from 'react-icons/ri';
import * as S from './styled';

import { getColor } from '../../utils/colors';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof typeof colors;
  size?: number;
  defaultSelected?: boolean;
  disabled?: boolean;
}

export const RadioButton = (props: RadioButtonProps) => {
  const {
    color = 'blue',
    size = 40,
    defaultSelected = false,
    disabled = false,
    onChange,
    ...other
  } = props;

  const [selected, setSelected] = React.useState(defaultSelected);

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);

    setSelected((prevSelected) => !prevSelected);
  };

  const buttonColor = disabled ? getColor('gray', 6) : color;

  return (
    <S.RadioButtonContainer color={color} size={size} disabled={disabled}>
      <S.RadioButtonRoot
        type="radio"
        onChange={handler}
        checked={selected}
        disabled={disabled}
        {...other}
      />
      {selected ? <RiRadioButtonLine size={size / 2} color={buttonColor} />
        : <RiCheckboxBlankCircleLine size={size / 2} color={buttonColor} />}
    </S.RadioButtonContainer>
  );
};
