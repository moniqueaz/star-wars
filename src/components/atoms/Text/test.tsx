import { screen } from '@testing-library/react';
import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import Text from '.';

describe('<Text />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Text data-testid="Text">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render text light', () => {
    renderWithTheme(<Text>Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { color: '#f1f1f1' } );
  } );

  it('should render text dark', () => {
    renderWithTheme(<Text color="dark">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { color: '#1A4173' } );
  } );

  it('should render text small', () => {
    renderWithTheme(<Text size="small">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { ['font-size']: theme.font.sizes.small } );
  } );

  it('should render text medium', () => {
    renderWithTheme(<Text size="medium">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { ['font-size']: theme.font.sizes.medium } );
  } );

  it('should render text large', () => {
    renderWithTheme(<Text size="large">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { ['font-size']: theme.font.sizes.large } );
  } );

  it('should render without children', () => {
    const { container } = renderWithTheme(<Text/>);
    expect(container.querySelector('p')).not.toBeInTheDocument();
  } );
} );
