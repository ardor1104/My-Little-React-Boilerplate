import { lazy, Suspense } from 'react';

const loadable = (importFunc: any) => {
  const LazyComponent = lazy(importFunc);

  return (props: any) => {
    return (
      <Suspense fallback={<div />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
};

export default loadable;
