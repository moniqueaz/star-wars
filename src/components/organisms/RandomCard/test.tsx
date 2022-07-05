import { render, screen } from '@testing-library/react';
import * as Card from 'service/hooks/card';
import RandomCard from '.';

jest.mock('service/hooks/card');

jest.mock('components/atoms/Button', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Button"/>;
    },
  };
} );

jest.mock('components/molecules/Card', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Card"/>;
    },
  };
} );

describe('<RandomCard />', () => {
  it('should render button and card', () => {
    jest.spyOn(Card, 'useCard').mockReturnValue( {
      data: { title: 'Titulo', card: { nave: 'nave' } }, error: '',
      isValidating: false,
    } );
    const { container } = render(<RandomCard count={5} slug="people"/>);
    expect(screen.getByTestId('Mock Button')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Card')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render isValidationg', () => {
    jest.spyOn(Card, 'useCard').mockReturnValue( {
      data: { title: '', card: {} }, error: 'error message',
      isValidating: false,
    } );
    render(<RandomCard count={5} slug="people"/>);
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  } );

  it('should render error', () => {
    jest.spyOn(Card, 'useCard').mockReturnValue( {
      data: { title: '', card: {} }, error: '',
      isValidating: true,
    } );
    render(<RandomCard count={5} slug="people"/>);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  } );
} );

