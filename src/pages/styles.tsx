import styled, { css } from 'styled-components';

export const Main = styled.main``;

export const Nav = styled.nav``;

export const Link = styled.a`
  ${( { theme } ) => css`
    text-decoration: none;
    color: ${theme.colors.white};
  `}
`;
