import { StyledCard } from './styles';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
