import { renderWithTheme } from 'utils/tests/helpers';
import { screen } from '@testing-library/react';

import Card from '.';

describe('<Card />', () => {
  it('should render', () => {
    const { container } = renderWithTheme(<Card image="/" title="Luke Skywalker"/>);
    expect(container.querySelector('ul')).toBeInTheDocument();
    expect(container.querySelector('li')).not.toBeInTheDocument();
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('p')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render correct title', () => {
    renderWithTheme(<Card image="/" title="Luke Skywalker"/>);
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  } );

  it('should render with list', () => {
    renderWithTheme(<Card image="/" title="Luke Skywalker" list={{
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
    }}/>);
    expect(screen.getByText(/blond/i)).toBeInTheDocument();
  } );
} );
