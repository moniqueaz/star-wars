import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${( { theme } ) => css`
    padding: ${theme.spacings.medium} 0;
  `}
`;

export const Content = styled.div`
  max-width: 25rem;
  margin: 0 auto;
`;

