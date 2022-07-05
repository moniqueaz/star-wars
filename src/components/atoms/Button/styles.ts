import styled, { css, DefaultTheme } from 'styled-components';

type ButtonProps = {
  color: 'light' | 'dark',
  size: 'small' | 'normal' | 'full',
}

const wrapperModifiers = {
  small: () => css`
    width: auto;
  `,
  normal: (theme: DefaultTheme) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  full: () => css`
    width: 100%;
  `,
  light: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  `,
  dark: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

export const Button = styled.button<ButtonProps>`
  ${( { theme, size, color } ) => css`
    border: none;
    box-shadow: none;
    border: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
    ${wrapperModifiers[color](theme)};
    ${wrapperModifiers[size](theme)};
  `}
`;
