import React, { HTMLAttributes, FC } from 'react';
import { StyledButton } from './Button.styles';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'Primary' | 'Secondary';
}

const Button: FC<IButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
