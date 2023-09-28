import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    :root {
        --sidebar-wt: 60px;
        --header-ht: 94px;
    }
    
    *, *:before, *:after {
        -webkit-box-sizing: border-box!important;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;

        @media screen and (min-width: 769px) {
            font-size: 1.5rem;          
        }
        @media screen and (max-width: 768px) {
            font-size: 1.8rem;
        }
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        text-rendering: optimizeSpeed;
    }
    a {
        color: var(--text-color);
        text-decoration: none;
    }

    .select-none {
        -webkit-user-select: none!important;
        -moz-user-select: none!important;
        -ms-user-select: none!important;
        user-select: none!important;
    }
`

export default GlobalStyles;