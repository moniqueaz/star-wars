import { render } from '@testing-library/react';

import Image from '.';

describe('<Image />', () => {
  it('should render', () => {
    const { container } = render(<Image src="/"/>);
    expect(container.querySelector('img')).toBeInTheDocument();
    expect(container.querySelector('img')).toHaveStyle( { width: 'auto' } );

    expect(container.firstChild).toMatchSnapshot();
  } );

  it('should render without src', () => {
    const { container } = render(<Image src=""/>);
    expect(container.querySelector('img')).not.toBeInTheDocument();
  } );

  it('should render without full', () => {
    const { container } = render(<Image src="/" size="full"/>);
    expect(container.querySelector('img')).toHaveStyle( { width: '100%' } );
  } );
} );
