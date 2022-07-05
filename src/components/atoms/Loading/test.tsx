import { renderWithTheme } from 'utils/tests/helpers';

import Loading from '.';

describe('<Loading />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Loading />);
    expect(container.querySelector('div')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render small', () => {
    const { container } = renderWithTheme(<Loading size="small" color="dark"/>);
    expect(container.querySelector('div')).toHaveStyle( { width: '1.6rem' } );
  } );

  it('should render medium', () => {
    const { container } = renderWithTheme(<Loading size="medium" />);
    expect(container.querySelector('div')).toHaveStyle( { width: '3.2rem' } );
  } );

  it('should render large', () => {
    const { container } = renderWithTheme(<Loading size="large" />);
    expect(container.querySelector('div')).toHaveStyle( { width: '5.6rem' } );
  } );
} );
