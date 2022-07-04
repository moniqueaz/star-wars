import { renderWithTheme } from 'utils/tests/helpers';

import { Container } from './';

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Container>Conteudo</Container>);

    expect(container).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
