import { composeStories } from '@storybook/testing-react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import useRender from 'hooks/useRender';

import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('atoms/Button', () => {
  it('Default render', async () => {
    useRender(<Default />);

    const buttonElement = await screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('Link render', async () => {
    useRender(<Default to='/' />);

    const buttonElement = await screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('Anchor & kind text render', async () => {
    useRender(<Default kind='text' />);

    const buttonElement = await screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('kind underline render', async () => {
    useRender(<Default kind='underline' />);

    const buttonElement = await screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('kind dangerous render', async () => {
    useRender(<Default kind='dangerous' />);

    const buttonElement = await screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
  });

  it('do click', async () => {
    const onClick = jest.fn();

    useRender(<Default onClick={onClick} />);

    const buttonElement = await screen.getByRole('button');

    userEvent.click(buttonElement);

    expect(onClick).toHaveReturnedTimes(1);
  });

  it('do click when button disabled', async () => {
    const onClick = jest.fn();
    const disabledOnClick = jest.fn();

    useRender(
      <Default
        isDisabled
        onClick={onClick}
        disabledOnClick={disabledOnClick}
      />,
    );

    const buttonElement = await screen.getByRole('button');

    userEvent.click(buttonElement);

    expect(onClick).toHaveReturnedTimes(0);
    expect(disabledOnClick).toHaveReturnedTimes(1);
  });
});
