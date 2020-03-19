import { createGlobalStyle } from 'styled-components'
import './fonts.css'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito Sans', sans-serif;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyle;