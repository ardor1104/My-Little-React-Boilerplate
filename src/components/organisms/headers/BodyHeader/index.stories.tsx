import BodyHeader from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'organisms/headers/BodyHeader',
  component: BodyHeader,
} as ComponentMeta<typeof BodyHeader>;

export const Default: ComponentStory<typeof BodyHeader> = () => {
  return <BodyHeader />;
};
