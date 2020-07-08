import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    

    html {
        box-sizing: border-box;
        font-size: 16px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul, blockquote {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    body {
        background: #FFF;
        color: #000;
        font-family: 'Raleway', sans-serif;
    }
`;

export default GlobalStyle;
