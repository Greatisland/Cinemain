import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {margin: 0; padding: 0; color: #fff;}
  a {text-decoration: none;}
  ul, ol {list-style: none;}
  html, body {font-family: 'Noto Sans KR', sans-serif; background: #222;}
`

export default GlobalStyle