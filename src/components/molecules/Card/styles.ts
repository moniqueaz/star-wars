import styled, { css } from 'styled-components';
import Text from 'components/atoms/Text';

export const Wrapper = styled.div`
  ${( { theme } ) => css`
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`;

export const Top = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

export const List = styled.ul`
  ${( { theme } ) => css`
    color: ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall};
    &:empty {
      display: none;
    }
  `}
`;

export const Item = styled.li`
  ${( { theme } ) => css`
    display: flex ;
    justify-content: flex-start;
    align-items: flex-start;
    &:empty {
      display: none;
    }
    & + li {
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Label = styled.label`
  ${( { theme } ) => css`
    text-transform: capitalize;
    font-weight: ${theme.font.bold};
    
    &:after{
      content: ':';
      margin-right: 0.5rem;
    }
  `}
`;

export const Value = styled.span``;

export const TitleUI = styled(Text)`
  ${( { theme } ) => css`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 30%);
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    width: 80%;
    text-align: center;
    border-right: 3px solid ${theme.colors.primary};
    border-bottom: 3px solid ${theme.colors.primary};
  `}
`;
