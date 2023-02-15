import ExampleDetailPage from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'pages/ExampleDetailPage',
  component: ExampleDetailPage,
} as ComponentMeta<typeof ExampleDetailPage>;

export const Default: ComponentStory<typeof ExampleDetailPage> = () => {
  return <ExampleDetailPage />;
};
