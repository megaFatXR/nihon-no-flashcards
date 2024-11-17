import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: Arial, sans-serif;
    transition: all 0.3s ease-in-out;
  }
  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    margin: 0 10px;
  }
  img {
    filter: invert(${(props) => {if (props.theme.background === '#111') {
      console.log(props.theme.background);
      return .93
    } return 0}
  })
`;

export default GlobalStyles;
