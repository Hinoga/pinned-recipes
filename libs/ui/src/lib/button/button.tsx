import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  border: none;
  background: transparent;
  padding: 15px;
  border-radius: 4px;
`;

export const Button = (props: ButtonProps) => {
  return <StyledButton />;
};
