import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    --primary-background: hsla(258, 34%, 87%, 1);
    --paradise-pink: hsl(339, 100%, 79%);
    --primary-forground: hsla(252, 51%, 24%, 1);
    --rich-black-fogra-39: hsla(156, 20%, 5%, 1);
  }

  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    background-color: var(--primary-background);
    color: var(--paradise-pink);
  }

`

export default GlobalStyle
