import { createGlobalStyle } from 'styled-components'

const ResetStyles = createGlobalStyle`

html {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
}

a {
    text-decoration: none;
    color: inherit;
}

* {
    box-sizing: border-box;
}
`

export default ResetStyles