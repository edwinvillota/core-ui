import { FC } from 'react';
import { StyledButton } from './Button.styles';
import { IButtonProps } from './Buttons.props';

const Button: FC<IButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
