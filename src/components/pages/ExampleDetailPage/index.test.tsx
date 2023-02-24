import { composeStories } from '@storybook/testing-react';
import { act } from '@testing-library/react';

import useRender from 'hooks/useRender';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('pages/ExampleDetailPage', () => {
  it('render ExampleDetailPage', async () => {
    await act(() => useRender(<Default />));
  });
});