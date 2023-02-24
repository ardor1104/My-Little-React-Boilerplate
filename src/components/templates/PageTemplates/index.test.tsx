import { composeStories } from '@storybook/testing-react';

import useRender from 'hooks/useRender';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('templates/PageTemplates', () => {
  it('render Default', async () => {
    useRender(<Default />);
  });

  it('render with header', async () => {
    useRender(<Default header={<>header</>} />);
  });

  it('render with footer', async () => {
    useRender(<Default footer={<>footer</>} />);
  });
});
