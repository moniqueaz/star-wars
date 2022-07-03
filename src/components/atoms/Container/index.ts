import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${( { theme } ) => css`
    padding: 10px;
    margin: 0 auto;
    max-width: 1250px;
    width: 100%;
    background-color: ${theme.colors.mainBg};
  `}
`;
