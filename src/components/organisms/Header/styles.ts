import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${( { theme } ) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    background-image: linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.mainBg});
    position: relative;
    z-index: 1;

    &:before{
      content: '';
      background-image: linear-gradient(to right, transparent, #fff, transparent);
      height: 2px;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: .5;
      z-index: 0;
      animation: show 1s linear;
      
      @media(min-width: 1024px){
        height: 3px;
      }
    }

    @keyframes show {
      from {width: 0};
      to {width: 100%};
    }
  `}
`;
