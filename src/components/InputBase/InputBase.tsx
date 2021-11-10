import * as React from 'react';
import * as S from './styled';

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftSideAddition?: React.ReactNode;
  rightSideAddition?: React.ReactNode;
}

export const InputBase = (props: InputBaseProps) => {
  const {
    leftSideAddition,
    rightSideAddition,
    className,
    ...other
  } = props;
  return (
    <S.InputBaseContainer className={className}>
      <S.LeftSide>
        {leftSideAddition}
      </S.LeftSide>
      <S.InputRoot {...other} />
      <S.RightSide>
        {rightSideAddition}
      </S.RightSide>
    </S.InputBaseContainer>
  );
};
