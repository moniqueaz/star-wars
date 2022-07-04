import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${( { theme } ) => css`
    text-align: center;
    background-color: ${theme.colors.black};
    width: 100%;
    padding: .5rem;
    
    @media(min-width: 1024px){
      padding: 2rem;
    }
  `}
`;
