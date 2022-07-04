import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Title from '.';

describe('<Title />', () => {
  it('should render Title', () => {
    const { container } = renderWithTheme(<Title>Titulo</Title>);
    expect(screen.getByRole('heading', { name: /Titulo/i } )).toBeInTheDocument();
    expect(container.querySelector('h1')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render Title', () => {
    const { container } = renderWithTheme(<Title type="sessionTitle">Titulo de Sessão</Title>);
    expect(screen.getByRole('heading', { name: /Titulo de Sessão/i } )).toBeInTheDocument();
    expect(container.querySelector('h2')).toBeInTheDocument();
  } );

  it('should render Subtitle', () => {
    const { container } = renderWithTheme(<Title type="subTitle">Subtitulo</Title>);
    expect(screen.getByRole('heading', { name: /Subtitulo/i } )).toBeInTheDocument();
    expect(container.querySelector('h3')).toBeInTheDocument();
  } );

  it('should render without Title', () => {
    const { container } = renderWithTheme(<Title />);
    expect(container.querySelector('h1')).not.toBeInTheDocument();
  } );

  it('should render title dark', () => {
    const { container } = renderWithTheme(<Title color="dark">Titulo</Title>);
    expect(container.querySelector('h1')).toHaveStyle( { color: '#1A4173' } );
  } );

  it('should render title light', () => {
    const { container } = renderWithTheme(<Title>Titulo</Title>);
    expect(container.querySelector('h1')).toHaveStyle( { color: '#f1f1f1' } );
  } );
} );
