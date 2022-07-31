import { FC, MouseEvent, MouseEventHandler, ReactNode } from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

const ButtonStyled = styled.button(({ disabled, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: disabled ? 'not-allowed' : 'pointer',
  border: `2px solid ${theme.colors.white}`
}));

const Button: FC<ButtonProps> = ({
  disabled = false,
  type = 'button',
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  return (
    <ButtonStyled
      onClick={handleClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
