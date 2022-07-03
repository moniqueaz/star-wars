import styled, { css, DefaultTheme } from 'styled-components';

type WrapperProps = { light: boolean, size: 'small' | 'medium' | 'large' }

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
};

export const Wrapper = styled.p<WrapperProps>`
  ${( { theme, light, size } ) => css`
      width: 100%;
      color: ${light ? theme.colors.white : theme.colors.primary};
      ${wrapperModifiers[size](theme)};
  `}
`;
