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
    box-sizing :border-box !important;

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
.section-padding{
    padding: 3% 5%;
}
`;

export default GlobalStyle;
