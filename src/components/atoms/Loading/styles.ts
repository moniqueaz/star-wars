import styled, { css, DefaultTheme } from 'styled-components';

type SizeProps = { size: 'small' | 'medium' | 'large'}

type ColorProps = { color: 'dark' | 'light'}

const wrapperModifiers = {
  small: () => css`
    width: 1.6rem;
    height: 1.6rem;
    border-width: 0.2rem;
    &:before {
      width: 0.2rem;
      height: 0.2rem;
    }
    &:after {
      width: 0.2rem;
      height: 0.2rem;
    }
  `,
  medium: () => css`
    width: 3.2rem;
    height: 3.2rem;
    border-width: 0.3rem;
    &:before {
      width: 0.3rem;
      height: 0.3rem;
    }
    &:after {
      width: 0.3rem;
      height: 0.3rem;
    }
  `,
  large: () => css`
    width: 5.6rem;
    height: 5.6rem;
    border-width: 0.4rem;
    &:before {
      width: 0.4rem;
      height: 0.4rem;
    }
    &:after {
      width: 0.4rem;
      height: 0.4rem;
    }
  `,
  dark: (theme: DefaultTheme) => theme.colors.darkGray,
  light: (theme: DefaultTheme) => theme.colors.lightGray,
};

export const Container = styled.div<SizeProps>`
  ${( { size } ) => css`
    ${wrapperModifiers[size]()};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const Wrapper = styled.div<SizeProps>`
  ${( { size } ) => css`
    display: inline-block;
    position: relative;
    ${wrapperModifiers[size]()};
    border: 0;
  `}
`;

export const RoundedEdge = styled.div<SizeProps & ColorProps>`
  ${( { theme, size, color } ) => css`
    ${wrapperModifiers[size]()}
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    animation: dotte 0.8s linear infinite;
    animation-delay: -0.45s;
    @keyframes dotte {
      0% {
        transform: rotate(45deg);
      }
      100% {
        transform: rotate(405deg);
      }
    }
    &:before {
      content: '';
      background-color: ${wrapperModifiers[color](theme)};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    &:after {
      content: '';
      background-color: ${wrapperModifiers[color](theme)};
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

export const Bar = styled.div<SizeProps & ColorProps>`
  ${( { theme, size, color } ) => css`
    box-sizing: border-box;
    display: block;
    position: absolute;
    border-radius: 50%;
    border-color: ${wrapperModifiers[color](theme)} transparent transparent transparent;
    border-style: solid;
    animation: spinner 0.8s linear infinite;
    ${wrapperModifiers[size]()};

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
