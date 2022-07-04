import styled, { css, DefaultTheme } from 'styled-components';

const getColor = {
  light: (theme: DefaultTheme) => css`color: ${theme.colors.white}`,
  dark: (theme: DefaultTheme) => css`color: ${theme.colors.primary}`,
};

type WrapperProps = { color: 'light' | 'dark' }

export const Wrapper = styled.div<WrapperProps>`
  ${( { theme, color } ) => css`
    h1, h2, h3{
      ${getColor[color](theme)}
    }
  `}
`;

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
