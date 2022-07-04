import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.h1`
  ${( { theme } ) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const SessionTitle = styled.h2`
  ${( { theme } ) => css`
    font-size: ${theme.font.sizes.xlarge};
  `}
`;

export const SubTitle = styled.h3`
  ${( { theme } ) => css`
    font-size: ${theme.font.sizes.large};
  `}
`;
