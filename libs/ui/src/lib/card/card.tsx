import { StyledCard } from './styles';

/* eslint-disable-next-line */
export interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return <StyledCard animate={{ x: [0, 10, 0] }}>{children}</StyledCard>;
}

export default Card;
