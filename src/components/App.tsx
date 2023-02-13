import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import styled from 'styled-components';

import MainPage from 'components/pages/MainPage';
import ExamplePage from 'components/pages/ExamplePage';
import ExampleDetailPage from './pages/ExampleDetailPage';

const Root = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 100vw;
  max-width: 100%;
`;

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Root>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/example' element={<ExamplePage />} />
          <Route path='/example/:exampleId' element={<ExampleDetailPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Root>
    </BrowserRouter>
  );
}
