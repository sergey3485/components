import * as React from 'react';
import * as colors from '@radix-ui/colors';

import * as S from './styled';
import { InputBase } from '../InputBase';
import { TypographyText } from '../Typography';

export interface CombinedInputProps {
  variant: 'text' | 'outline' | 'filled';
  color?: keyof typeof colors;
  contentColor?: keyof typeof colors;
  topSideAddition: boolean;
  bottomSideAddition: boolean;
  topMassage?: string;
  bottomMassage?: string;
  topColor?: keyof typeof colors;
  bottomColor?: keyof typeof colors;
}

export const CombinedInput = (props: CombinedInputProps) => {
  const {
    variant = 'outline',
    color = 'whiteA',
    contentColor = 'blackA',
    topSideAddition,
    bottomSideAddition,
    topMassage,
    bottomMassage,
    topColor = 'blackA',
    bottomColor = 'blackA',
  } = props;
  return (
    <S.FormRoot variant={variant} color={color}>
      {topSideAddition && (
        <TypographyText size="small" color={topColor}>
          {topMassage}
        </TypographyText>
      )}
      <InputBase type="text" color={contentColor} variant="text" />
      {bottomSideAddition && (
        <TypographyText size="small" color={bottomColor}>
          {bottomMassage}
        </TypographyText>
      )}
    </S.FormRoot>
  );
};
