import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from 'utils/tests/helpers';

import Template from '.';

type ContainerProps = {
  children: React.ReactNode
}

jest.mock('components/atoms/Container', () => {
  return {
    Container: function Mock( { children }: ContainerProps) {
      return <div data-testid="Mock Container">{children}</div>;
    },
  };
} );

describe('<Template />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Template><div data-testid="Template">Template</div></Template>);
    expect(screen.getByTestId('Template')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
