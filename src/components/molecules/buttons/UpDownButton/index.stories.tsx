import UpDownButton from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'molecules/buttons/UpDownButton',
  component: UpDownButton,
  decorators: [withKnobs],
} as ComponentMeta<typeof UpDownButton>;

export const Default: ComponentStory<typeof UpDownButton> = ({
  propNumber,
  max,
  min,
  onChange,
}) => {
  const propNumberKnob = number('propNumber', 0);
  const maxKnob = number('max', 10);
  const minKnob = number('min', 0);

  return (
    <UpDownButton
      propNumber={propNumber ? propNumber : propNumberKnob}
      max={max ? max : maxKnob}
      min={min ? min : minKnob}
      onChange={onChange ? onChange : action(`onChnage`)}
    />
  );
};
