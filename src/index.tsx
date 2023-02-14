import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import 'sanitize.css';

import store from 'store';
import theme from 'theme';

import { ThemeProvider } from 'styled-components';

import App from 'components/App';
import ErrorBoundary from 'components/pages/ErrorBoundary';
import GlobalStyle from 'components/GlobalStyle';

const MOUNT_NODE = document.getElementById('app');

const render = (rootNode: Element) => {
  createRoot(rootNode).render(
    <Provider store={store}>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </ErrorBoundary>
    </Provider>,
  );
};

if (MOUNT_NODE !== null) {
  render(MOUNT_NODE);
}
