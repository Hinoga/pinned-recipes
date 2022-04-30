import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DataAccessContextProps {}

const StyledDataAccessContext = styled.div`
  color: pink;
`;

export function DataAccessContext(props: DataAccessContextProps) {
  return (
    <StyledDataAccessContext>
      <h1>Welcome to DataAccessContext!</h1>
    </StyledDataAccessContext>
  );
}

export default DataAccessContext;
