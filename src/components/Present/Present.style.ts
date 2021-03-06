import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  `}
`;

export const Lid = styled.div`
  ${({ theme }) => css`
    width: 100px;
    height: 25px;
    background-color: ${theme.montyHall.colors.lid};
  `}
`;

export const Box = styled.div`
  ${({ theme }) => css`
    width: 90px;
    height: 60px;
    background-color: ${theme.montyHall.colors.box};
  `}
`;

export const Bow1 = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.montyHall.colors.bow};
    width: 15px;
    height: 85px;
    position: absolute;
  `}
`;

export const Bow2 = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.montyHall.colors.bow};
    width: 90px;
    height: 15px;
    position: absolute;
    top: 40px;
  `}
`;
