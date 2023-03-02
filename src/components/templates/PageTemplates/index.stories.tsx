import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageTemplate from '.';

export default {
  title: 'template/PageTemplate',
  component: PageTemplate,
} as ComponentMeta<typeof PageTemplate>;

export const Default: ComponentStory<typeof PageTemplate> = ({
  children,
  header,
  footer,
}) => {
  return (
    <PageTemplate header={header} footer={footer}>
      {children ?? <>PageTemplate</>}
    </PageTemplate>
  );
};
