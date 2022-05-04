import { StyledCardBody } from './styles';

/* eslint-disable-next-line */
export interface CardBodyProps {
  children: React.ReactNode;
}

export function CardBody({ children }: CardBodyProps) {
  return <StyledCardBody>{children}</StyledCardBody>;
}

export default CardBody;
