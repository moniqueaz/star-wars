import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${( { theme } ) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    animation: fullView 0.5s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    @keyframes fullView {
      100% {
        width: 100%;
      }
    }
  `}
`;

export const Animate = styled.div`
  ${( { theme } ) => css`
    width: 100%;
    height: 100%;
    background: ${theme.colors.gray};
    opacity: 30%;
    animation: shimmer 2s infinite linear;
    background: linear-gradient(135deg, ${theme.colors.gray} 30%, ${theme.colors.white} 50%, ${theme.colors.gray} 70%);
    background-size: 300% 100%;
    @keyframes shimmer {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0% 0;
      }
    }
  `}
`;
