import UpDownButton from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/buttons/UpDownButton',
  component: UpDownButton,
  decorators: [withKnobs],
} as ComponentMeta<typeof UpDownButton>;

export const Default: ComponentStory<typeof UpDownButton> = () => {
  const propNumber = number('propNumber', 0);
  const max = number('max', 10);
  const min = number('min', 0);

  return (
    <UpDownButton
      propNumber={propNumber}
      max={max}
      min={min}
      onChange={action(`onChnage`)}
    />
  );
};
