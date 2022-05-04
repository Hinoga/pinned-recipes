import styled from 'styled-components';

export const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  place-items: center;
`;

export const ListContainerStyled = styled.div`
  padding: 1rem 5rem;
`;
