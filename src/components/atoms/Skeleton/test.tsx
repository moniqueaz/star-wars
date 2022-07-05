import { renderWithTheme } from 'utils/tests/helpers';

import Skeleton from '.';

describe('<Skeleton />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Skeleton />);
    expect(container.querySelector('div')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
