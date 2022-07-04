import { render } from '@testing-library/react';

import Icon from '.';

describe('<Icon />', () => {
  it('should render', () => {
    const { container } = render(<Icon icon="arrow"/>);
    expect(container.querySelector('svg')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render without icon', () => {
    const { container } = render(<Icon icon="none"/>);
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  } );
} );
