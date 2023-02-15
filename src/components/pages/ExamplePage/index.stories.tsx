import ExamplePage from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'ExamplePage',
  component: ExamplePage,
} as ComponentMeta<typeof ExamplePage>;

export const Default: ComponentStory<typeof ExamplePage> = () => {
  return <ExamplePage />;
};
