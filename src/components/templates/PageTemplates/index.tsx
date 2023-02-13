import { ChildrenPropType } from 'components/globalType';

import styled from 'styled-components';

const Root = styled.section`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;

export default function PageTemplate({
  children,
  header,
  footer,
}: {
  children: ChildrenPropType;
  header?: JSX.Element;
  footer?: JSX.Element;
}): JSX.Element {
  return (
    <Root>
      {header}
      {children}
      {footer}
    </Root>
  );
}
