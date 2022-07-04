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
    const { container } = renderWithTheme(<Text light>Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { color: '#f1f1f1' } );

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render text small', () => {
    const { container } = renderWithTheme(<Text size="small">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { ['font-size']: theme.font.sizes.small } );

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render text medium', () => {
    const { container } = renderWithTheme(<Text size="medium">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { ['font-size']: theme.font.sizes.medium } );

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render text large', () => {
    const { container } = renderWithTheme(<Text size="large">Texto do paragrafo</Text>);
    expect(screen.getByText('Texto do paragrafo')).toHaveStyle( { ['font-size']: theme.font.sizes.large } );

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render without children', () => {
    const { container } = renderWithTheme(<Text/>);
    expect(container.querySelector('p')).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
