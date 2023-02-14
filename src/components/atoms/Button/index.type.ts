import { ReactNode } from 'react';

export interface ButtonPropsType {
  children: ReactNode;
  kind?: 'mono' | 'underline' | 'text' | 'dangerous';
  size?: 'lg' | 'md' | 'sm';
  to?: string;
  href?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  disabledOnClick?: () => void;
}
