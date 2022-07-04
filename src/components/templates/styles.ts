import styled, { css, DefaultTheme } from 'styled-components';

export const Wrapper = styled.div`
  ${( { theme } ) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;

const height = {
  desk: (theme: DefaultTheme) => css`min-height: calc(100vh - 2rem - ${theme.height.header.desk} - ${theme.height.footer.desk})`,
  mobile: (theme: DefaultTheme) => css`min-height: calc(100vh - 2rem - ${theme.height.header.mobile} - ${theme.height.footer.mobile})`,
};

export const Content = styled.div`
  ${( { theme } ) => css`
    ${height.mobile(theme)};
    @media(min-width: 1024px){
      ${height.desk(theme)};
    }
  `}
`;
