import { StyledCardFooter } from './styles';

/* eslint-disable-next-line */
export interface CardFooterProps {
  children: React.ReactNode;
}

export function CardFooter({ children }: CardFooterProps) {
  return <StyledCardFooter>{children}</StyledCardFooter>;
}

export default CardFooter;
