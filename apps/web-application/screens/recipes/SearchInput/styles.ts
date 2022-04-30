import styled from 'styled-components';

export const InputStyled = styled.input`
  font-size: 15px;
  padding: 10px;
  height: 30px;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none !important;
    border: 1px solid grey;
  }
`;
