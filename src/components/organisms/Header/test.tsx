import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Header from '.';

jest.mock('components/atoms/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Logo"/>;
    },
  };
} );

describe('<Header />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Header />);
    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
