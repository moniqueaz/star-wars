import { render } from '@testing-library/react';

import { Container } from './';

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = render(<Container>Conteudo</Container>);

    expect(container).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );
} );
