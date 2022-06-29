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
      background-color: ${theme.colors.light};
      align-items: center;
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
    }
    a {
      color: ${theme.colors.gray}
    }
  `}
`;

export default GlobalStyle;
