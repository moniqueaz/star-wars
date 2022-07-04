import styled, { css } from 'styled-components';

export const Main = styled.main``;

export const Nav = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media(min-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  ${( { theme } ) => css`
    text-decoration: none;
    color: ${theme.colors.white};
    width: 100%;
  `}
`;
