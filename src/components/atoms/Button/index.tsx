import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

interface PropsType {
  children: ReactNode;
  kind?: 'mono' | 'underline' | 'text' | 'dangerous';
  size?: 'lg' | 'md' | 'sm';
  to?: string;
  href?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

const styles = css<Pick<PropsType, 'kind' | 'size' | 'isDisabled'>>`
  border-radius: ${(props) =>
    `${
      props.size === 'lg' || props.size === 'md'
        ? props.theme.sizes.radius.md
        : props.theme.sizes.radius.sm
    }px`};
  padding: ${(props) =>
    props.kind !== 'underline' && props.kind !== 'text'
      ? props.size === 'lg'
        ? '16px 40px'
        : props.size === 'md'
        ? '8px 12px'
        : '6px 8px'
      : null};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  font-size: ${(props) =>
    props.size === 'lg'
      ? props.theme.sizes.font.xl
      : props.size === 'md'
      ? props.theme.sizes.font.lg
      : props.theme.sizes.font.sm};
  transition: all ease-in-out 200ms;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};

  ${(props) => {
    return {
      mono: `
        border: 1px solid ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.black
        };
        color: ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.black
        };
        background-color: transparent;
      `,
      underline: `
        color: ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.black
        };
        text-decoration: ${props.isDisabled ? '' : 'underline'};
        text-underline-position: under;
      `,
      text: `
        color: ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.black
        };
      `,
      dangerous: `
        color: ${props.theme.palette.white};
        background-color: ${
          props.isDisabled
            ? props.theme.palette.gray300
            : props.theme.palette.red
        };
      `,
    }[props.kind ?? 'mono'];
  }}

  &:hover {
    ${(props) =>
      !props.isDisabled
        ? {
            mono: `
              color: ${props.theme.palette.white};
              background-color: ${props.theme.palette.black};
            `,
            underline: `
              color: ${props.theme.palette.primary3};
            `,
            text: `
              color: ${props.theme.palette.primary3};
            `,
            dangerous: null,
          }[props.kind ?? 'mono']
        : null}
  }
`;

const StyledLink = styled(({ onClick, href, ...props }) => <Link {...props} />)`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const StyledButton = styled.button`
  ${styles}
`;

export default function Button({
  children,
  kind = 'mono',
  size = 'md',
  ...props
}: PropsType): JSX.Element {
  const { to } = props;
  const isAnchor: boolean = kind === 'underline' || kind === 'text';

  return to ? (
    <StyledLink kind={kind} size={size} {...props}>
      {children}
    </StyledLink>
  ) : isAnchor ? (
    <Anchor kind={kind} size={size} {...props}>
      {children}
    </Anchor>
  ) : (
    <StyledButton kind={kind} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
