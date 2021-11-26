import { HTMLAttributes, ReactNode } from 'react';

export enum ButtonShape {
  round = 'round',
  circle = 'circle',
}

export enum ButtonSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  dashed = 'dashed',
  link = 'link',
  text = 'text',
  default = 'default',
}

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  disabled?: boolean;
  href?: string;
  icon?: ReactNode;
  loading?: boolean;
  shape?: keyof typeof ButtonShape;
  size?: keyof typeof ButtonSize;
  type?: keyof typeof ButtonType;
}
