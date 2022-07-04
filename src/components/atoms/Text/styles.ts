import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = { color: 'light' | 'dark', size: 'small' | 'medium' | 'large' }

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  light: (theme: DefaultTheme) => css`color: ${theme.colors.white}`,
  dark: (theme: DefaultTheme) => css`color: ${theme.colors.primary}`,
};

export const Wrapper = styled.p<WrapperProps>`
  ${( { theme, color, size } ) => css`
      width: 100%;
      ${wrapperModifiers[color](theme)};
      ${wrapperModifiers[size](theme)};
  `}
`;
