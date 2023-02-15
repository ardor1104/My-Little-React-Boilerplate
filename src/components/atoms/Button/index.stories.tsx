import Button from '.';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

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
  title: 'atoms/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: `베이스가 되는 버튼 컴포넌트`,
  },
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
      onClick={action('onClick')}
      disabledOnClick={action('disabledOnClick')}
    >
      {value}
    </Button>
  );
};
