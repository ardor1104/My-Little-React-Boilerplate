import styled from 'styled-components';

import PageTemplate from 'components/templates/PageTemplates';
import BodyHeader from 'components/organisms/headers/BodyHeader';
import Button from 'components/atoms/Button';

const Root = styled.div``;

export default function ExamplePage(): JSX.Element {
  return (
    <PageTemplate header={<BodyHeader />}>
      <Root>ExamplePage</Root>
      <Button to='/example/1'>Go To Example Page 1</Button>
    </PageTemplate>
  );
}
