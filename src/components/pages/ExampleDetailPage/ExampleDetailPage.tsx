import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import PageTemplate from 'components/templates/PageTemplates';
import BodyHeader from 'components/organisms/headers/BodyHeader';
import PageMoveButton from 'components/molecules/buttons/UpDownButton';

const Root = styled.div``;

export default function ExampleDetailPage(): JSX.Element {
  const navigate = useNavigate();

  const { exampleId } = useParams();

  const [page, setPage] = useState<number>(1);

  const onPageMoveBUttonChagne = (value: number): void => {
    setPage(value);
  };

  useEffect(() => {
    if (page === 0) {
      navigate(`/example`);
    } else {
      navigate(`/example/${page}`);
    }
  }, [page]);

  return (
    <PageTemplate header={<BodyHeader />}>
      <Root>ExampleDetailPage{`[${exampleId}]`}</Root>
      <PageMoveButton
        defaultPage={1}
        max={10}
        min={0}
        onChange={onPageMoveBUttonChagne}
      />
    </PageTemplate>
  );
}
