import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Varela Round';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('/fonts/varela-round-latin-400-normal.woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

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
    font-family: "Varela Round", -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    background-color: var(--primary-background);
    color: var(--paradise-pink);
  }

  p {
    color: var(--primary-forground);
  }

  .form-wrapper {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 500px;
    margin: 0 auto;
  }

  .form-wrapper input[type=text] {
    margin: 6px 0;
    border-radius: 6px;
    border: 3px solid hsla(252, 51%, 24%, 1);
  }

  a {
    color: var(--primary-forground);
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }

  h2,
  h3 {
    color: var(--paradise-pink);
  }

  button,
  input[type=submit],
  select {
   border: 3px solid var(--primary-forground);
   border-radius: 6px;
   padding: 3px 6px;
   margin: 3px;
  }
`

export default GlobalStyle
