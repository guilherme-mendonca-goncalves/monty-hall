import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 300px;
    height: 300px;
    color: ${theme.colors.white};
    background-color: ${props => props.bgcolor ? props.bgcolor : 'white'};
    margin: 3px;
    font-size: 2rem;
    padding: 20px;
  `}
`;
