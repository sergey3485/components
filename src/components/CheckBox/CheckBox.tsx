import * as React from 'react';
import * as colors from '@radix-ui/colors';
import { RiCheckLine } from 'react-icons/ri';
import * as S from './styled';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: keyof typeof colors;
  size?: number;
  deafaultChecked?: boolean;
  disabled?: boolean;
}
export const Checkbox = (props: CheckboxProps) => {
  const {
    color = 'blackA',
    size = 40,
    defaultChecked = false,
    disabled = false,
    onChange,
    ...other
  } = props;

  const [checked, setCheacked] = React.useState(defaultChecked);

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);

    const isChecked = !checked;
    setCheacked(isChecked);
  };
  return (
    <S.CheckboxRootContainer color={color} size={size} disabled={disabled}>
      <S.CheckboxRoot
        size={size / 2}
        checked={checked}
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
        {...other}
      />
      <S.CheckboxCircuit size={size / 2} color={color}>
        {checked && <RiCheckLine size={size / 2} color={color} />}
      </S.CheckboxCircuit>
    </S.CheckboxRootContainer>
  );
};
