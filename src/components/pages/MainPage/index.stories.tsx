import MainPage from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

export const Default: ComponentStory<typeof MainPage> = () => {
  return <MainPage />;
};
