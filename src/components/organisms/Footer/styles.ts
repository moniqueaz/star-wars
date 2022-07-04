import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${( { theme } ) => css`
    text-align: center;
    background-color: ${theme.colors.black};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${theme.height.footer.mobile};
    @media(min-width: 1024px){
      height: ${theme.height.footer.desk};
    }
  `}
`;
