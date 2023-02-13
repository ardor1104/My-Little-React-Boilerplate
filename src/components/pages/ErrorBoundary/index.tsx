import { Component } from 'react';

import { ChildrenPropType } from 'components/globalType';

import logger from 'utils/logger';

export default class ErrorBoundary extends Component<
  {
    children: ChildrenPropType;
  },
  { hasError: boolean; chunkError: boolean }
> {
  override state = {
    hasError: false,
    chunkError: false,
  };

  static getDerivedStateFromError(error: any) {
    if (
      error.message.indexOf('chunk') > -1 ||
      error.message.indexOf('Chunk') > -1
    ) {
      return { chunkError: true };
    } else return { hasError: true };
  }

  override componentDidCatch(error: any) {
    logger.error(error);
    if (
      error.message.indexOf('chunk') > -1 ||
      error.message.indexOf('Chunk') > -1
    ) {
      if (window.navigator.onLine) {
        location.reload();
      }
    }
  }

  override render() {
    if (this.state.hasError) {
      return <div className='error-page'>ERROR</div>;
    } else if (this.state.chunkError) {
      return <div>CHUNK ERROR</div>;
    }

    return this.props.children;
  }
}
