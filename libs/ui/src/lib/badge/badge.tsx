import { StyledBadge } from './styles';

export interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return <StyledBadge>{children}</StyledBadge>;
}

export default Badge;
