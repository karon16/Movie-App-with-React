import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    height :100%;
}
body{
    overflow-x :hidden;
  background: #0e1930;
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

.active-genre{
    color: white !important;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }



::-webkit-scrollbar {
    background-color: rgba(250, 250, 250,1);
    width: 10px;
}
::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightBlue};
}

.visible-search-bar{
    width :30%;
    opacity: 1;

  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    .visible-search-bar{
    width :70%;
    opacity: 1;

  }
  }
`;

export default GlobalStyle;
