import * as colors from '@radix-ui/colors';

const getColor = <C extends keyof typeof colors>(color: C, step: number) => {
  const saturation = `${color}${step}` as keyof typeof colors[C];
  return colors[color][saturation];
};
