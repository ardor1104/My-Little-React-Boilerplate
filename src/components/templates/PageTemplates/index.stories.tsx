import PageTemplate from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';

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
