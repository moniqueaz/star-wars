import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Footer from '.';

type ContainerProps = {
  children: React.ReactNode
}

jest.mock('components/atoms/Text', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Text"></div>;
    },
  };
} );

jest.mock('components/atoms/Container', () => {
  return {
    Container: function Mock( { children }: ContainerProps) {
      return <div data-testid="Mock Container">{children}</div>;
    },
  };
} );

describe('<Footer />', () => {
  it('should render Container', () => {
    const { container } = renderWithTheme(<Footer />);
    expect(screen.getByTestId('Mock Container')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Text')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
