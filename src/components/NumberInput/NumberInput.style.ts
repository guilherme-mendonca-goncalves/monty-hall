import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.black};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: 1.5rem;
  `}
`;

export const Value = styled.span`
  ${({ theme }) => css`
    font-size: 6rem;
  `}
`;

export const DivButton = styled.div`
  ${({ theme }) => css`
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    width: 80px;
    height: 80px;
    margin: 5px;
    border: none;
  `}
`;
