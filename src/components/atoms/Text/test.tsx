import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Text from '.';

describe('<Text />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Text data-testid="Text">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
