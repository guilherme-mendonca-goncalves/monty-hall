import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
    }
    html {
      height: 100%;
    }
    body {
      background-color: ${theme.colors.dark};
      align-items: center;
      color: ${theme.colors.white};
      display: flex;
      flex-direction: column;
      font-family: 'Roboto', sans-serif;
      height: 100vh;
      justify-content: center;
      margin: 0;
      overflow: hidden;
    }
    #__next {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    a {
      color: ${theme.colors.gray}
    }

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    main div {
      display: flex;
    }

    div .gamePage {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    div .doors {
      display: flex;
      justify-content: space-around;
      align-self: stretch;
      flex-wrap: wrap;
    }

    div .button {
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }

    div .button button {
      background-color: ${theme.colors.red};
      color: ${theme.colors.white};
      font-size: 2rem;
      border: none;
      padding: 10px 25px;
    }

    h1 {
      display: flex;
      align-items: center;
      flex: 1;
    }

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      cursor: pointer;
    }

    h3 {
      display: flex;
      flex: 1;
      font-size: 2rem;
      color: ${theme.colors.dark};
    }
  `}
`;

export default GlobalStyle;
