import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    height :100%;
}
body{
    overflow-x :hidden;
}
*{
    padding : 0;
    margin :0;
    box-sizing :border-box;

}
.font-Biryani{
    font-family: ${({ theme }) => theme.fonts.biryani};
}
.font-Roboto{
    font-family: ${({ theme }) => theme.fonts.roboto};
}
.bold-text{
    font-weight :bold;
}

`;

export default GlobalStyle;
