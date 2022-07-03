import { render, screen } from '@testing-library/react';
// import { renderWithTheme } from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = render(<Logo data-testid="Logo"/>);
    expect(screen.getByAltText('logo star wars')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
