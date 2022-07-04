import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${( { theme } ) => css`
        padding: 1rem;
        margin: 0 auto;
        max-width: ${theme.grid.container};
        width: 100%;
    `}
`;
