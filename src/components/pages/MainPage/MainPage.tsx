import styled from 'styled-components';

import BodyHeader from 'components/organisms/headers/BodyHeader';
import PageTemplate from 'components/templates/PageTemplates';

const Root = styled.div``;

export default function MainPage(): JSX.Element {
  return (
    <PageTemplate header={<BodyHeader />}>
      <Root>MainPage</Root>
    </PageTemplate>
  );
}
