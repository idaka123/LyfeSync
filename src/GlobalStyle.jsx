import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
    :root {
        --sidebar-wt: 60px;
        --header-ht: 60px;
        --main-gradient: linear-gradient(118deg,rgba(30, 30, 30 ,1),rgba(30, 30, 30 ,.7));
        --second-color: #FDBD3E;
        --modal-header: 65px;
    }
    
    *, *:before, *:after {
        -webkit-box-sizing: border-box!important;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        margin: 0;

        @media screen and (min-width: 769px) {
            font-size: 1.3rem;          
        }
        @media screen and (max-width: 768px) {
            font-size: 1.6rem;
        }
    }

    html {
        font-size: 62.5%;
        font-size: 10px;
        width: 100%;
        line-height: 1.5;
        letter-spacing: .01rem;
    }
/*    ::-webkit-scrollbar {
        width: 5px;
      }
      
     ::-webkit-scrollbar-track {
        background: rgb(35, 35, 35);
        border-radius: 100px;
      }
      
     ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 100px;
      }
      
     ::-webkit-scrollbar-thumb:hover {
        background: #555;
      } */
    body {
        color: #626262;
        text-rendering: optimizeSpeed;
        background-color: #FCFCFC;
        font-family: Montserrat,Helvetica,Arial,sans-serif;
        font-weight: 400;
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

    .text-center {
        text-align: center!important;
    }
    
    .text-dark {
        color: rgba(30,30,30,1)!important;
    }

    .col3 {
        width: 33.333333%;
        height: 100%;
    }

    .mb-10 {
        margin-bottom: 10px!important;
    }
`

export default GlobalStyles;