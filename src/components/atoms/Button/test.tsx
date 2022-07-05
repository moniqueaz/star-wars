import { renderWithTheme } from 'utils/tests/helpers';

import Button from '.';

describe('<Button />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Button>Button</Button>);
    expect(container.querySelector('button')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render small', () => {
    const { container } = renderWithTheme(<Button size="small">Button</Button>);
    expect(container.querySelector('button')).toHaveStyle( { width: 'auto' } );
  } );

  it('should render normal', () => {
    const { container } = renderWithTheme(<Button size="normal">Button</Button>);
    expect(container.querySelector('button')).toHaveStyle( { padding: '0.8rem 3.2rem' } );
  } );

  it('should render large', () => {
    const { container } = renderWithTheme(<Button size="full">Button</Button>);
    expect(container.querySelector('button')).toHaveStyle( { width: '100%' } );
  } );

  it('should render dark', () => {
    const { container } = renderWithTheme(<Button color="dark">Button</Button>);
    expect(container.querySelector('button')).toHaveStyle( { ['background-color']: '#1A4173' } );
  } );

  it('should render light', () => {
    const { container } = renderWithTheme(<Button color="light">Button</Button>);
    expect(container.querySelector('button')).toHaveStyle( { ['background-color']: '#f1f1f1' } );
  } );
} );
