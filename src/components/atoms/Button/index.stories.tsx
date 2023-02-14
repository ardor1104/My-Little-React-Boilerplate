import Button from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

const kindOptions = {
  mono: 'mono',
  underline: 'underline',
  text: 'text',
  dangerous: 'dangerous',
};

const sizeOptions = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
};

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => {
  const kind: any = select('kind', kindOptions, 'mono');
  const size: any = select('size', sizeOptions, 'md');
  const value: string = text('value', 'Default');
  const to: string = text('to', '');
  const href: string = text('href', '');
  const isDisabled = boolean('isDisabled', false);

  const emptyTextConverter = (text: string): string | undefined => {
    if (text === '') {
      return undefined;
    }

    return text;
  };

  return (
    <Button
      kind={kind}
      size={size}
      to={emptyTextConverter(to)}
      href={emptyTextConverter(href)}
      isDisabled={isDisabled}
    >
      {value}
    </Button>
  );
};
