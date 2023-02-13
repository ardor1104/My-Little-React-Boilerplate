import { useState, useEffect } from 'react';

import styled from 'styled-components';

import Button from 'components/atoms/Button';

const Root = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const PageIndexText = styled.p`
  width: 100px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default function PageMoveButton({
  defaultPage,
  max,
  min,
  onChange,
}: {
  defaultPage?: number;
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
}): JSX.Element {
  const [number, setNumber] = useState<number>(defaultPage ?? 0);

  const isNumberMoreThanMax: boolean = !!max && number >= max;
  const isNumberLessThanMin: boolean = !!min && number <= min;

  const increaseNumber = (): void => {
    if (!isNumberMoreThanMax) {
      setNumber((state) => state + 1);
    }
  };

  const decreaseNumber = (): void => {
    if (!isNumberLessThanMin) {
      setNumber((state) => state - 1);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(number);
    }
  }, [onChange, number]);

  return (
    <Root>
      <PageIndexText>{number}</PageIndexText>
      <Button onClick={decreaseNumber} isDisabled={isNumberLessThanMin}>
        - Decrease
      </Button>
      <Button onClick={increaseNumber} isDisabled={isNumberMoreThanMax}>
        + Increase
      </Button>
    </Root>
  );
}
