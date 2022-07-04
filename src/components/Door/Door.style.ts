import styled, { css } from 'styled-components';

export const Area = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.montyHall.sizes.widthDoor};
    height: ${theme.montyHall.sizes.heightDoor};
    align-items: center;
    margin: 5px;
    position: relative;
  `}
`;

export const Frame = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    border-left: 5px solid ${theme.montyHall.colors.brown};
    border-top: 5px solid ${theme.montyHall.colors.brown};
    border-right: 5px solid ${theme.montyHall.colors.brown};
    background-color: ${theme.montyHall.colors.backgroundDoor};
    width: 90%;

    ${(props) => props.selected === true && css`
      border-left: 5px solid ${theme.montyHall.colors.yellow};
      border-top: 5px solid ${theme.montyHall.colors.yellow};
      border-right: 5px solid ${theme.montyHall.colors.yellow};
    `}
  `}
`;

export const Door = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${theme.montyHall.colors.door};
    align-items: center;
    padding: 15px;
  `}
`;

export const Number = styled.div`
  ${({ theme }) => css`
    font-size: 3rem;

    ${(props) => props.selected === true && css`
      color: ${theme.montyHall.colors.yellow};
    `}
  `}
`;

export const Floor = styled.div`
  ${({ theme }) => css`
    height: 10px;
    width: 100%;
    background-color: ${theme.montyHall.colors.whitesmoke};
  `}
`;

export const DoorHandle = styled.div`
${({ theme }) => css`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${theme.montyHall.colors.doorHandle};
  position: absolute;
  top: calc(0.45 * ${theme.montyHall.sizes.heightDoor});
  align-self: flex-start;

  ${(props) => props.selected === true && css`
      background-color: ${theme.montyHall.colors.yellow};
    `}
  `}
`;
