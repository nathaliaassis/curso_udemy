import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;

      &:focus {
        outline:0 !important;
        box-shadow: none !important;
      }
  }

  html, body, #root {
    margin: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    background-color: #F9f9f9;
  } 

  .app{
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #56ccf2, #2f80ed); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #56ccf2, #2f80ed); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;