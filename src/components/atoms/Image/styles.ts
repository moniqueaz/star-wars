import styled, { css } from 'styled-components';
type ImageProps = {
  size: 'normal' | 'full'
}

const getSize = ( {
  normal: css`width: auto`,
  full: css`width: 100%`,
} );

export const Image = styled.img<ImageProps>`
  ${( { size } ) => css`
    ${getSize[size]}
  `}
`;
