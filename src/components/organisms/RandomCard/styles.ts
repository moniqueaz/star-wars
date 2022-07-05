import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  ${( { theme } ) => css`
    margin-bottom: ${theme.spacings.small};
    
    @media(min-width: '1024px'){
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

