import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
from{
  opacity : 0;
  transform : translateY(-100%);
}to{
  opacity :1;
  transform : translateY(0%);

}`;

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.lightBlue};
  padding: 15px 25px;
  border: none;
  outline: none;
  line-height: ${({ fontsize }) => fontsize || "0.9rem"};
  font-size: ${({ fontsize }) => fontsize || "0.9rem"};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.biryani};
  margin: 10px 0;
  margin-left: ${({ buttonmargin }) => buttonmargin || "0"};
  border-radius: 0;
  box-sizing: border-box !important;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};

  ${({ animation }) =>
    animation &&
    css`
      animation: 1.5s ${fadeIn} ease;
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      background: none;
      border: 1px solid white;
    `}

    ${({ cardbutton }) =>
    cardbutton &&
    css`
      padding: 10px 6px;
      /* border: 1px solid white; */
    `}
  &:hover {
    ${({ animatesecondary }) =>
      animatesecondary &&
      css`
        background-color: rgba(250, 250, 250, 0.2);
        transition: all 0.4s ease-out;
        box-shadow: 0px 0px 10px 0px rgba(250, 250, 250, 0.1);
      `}
    ${({ animateprimary }) =>
      animateprimary &&
      css`
        transition: all 0.4s ease;
        background-color: rgb(3, 91, 190);
        box-shadow: 0px 0px 10px 0px rgba(250, 250, 250, 0.1);
      `}
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    /* font-size: 1rem; */
  }
`;
