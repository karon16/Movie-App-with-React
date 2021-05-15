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
  cursor: pointer;

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
    `}
    ${({ centered }) =>
    centered &&
    css`
      margin: 10px auto;
      display: block;
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
  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    padding: 13px 23px;
    line-height: 1.4rem;
    font-size: 1.4rem;
    margin: 8px 0;
    margin-left: ${({ buttonmargin }) => buttonmargin || "0"};

    ${({ centered }) =>
      centered &&
      css`
        margin: 10px auto;
        display: block;
      `}
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    padding: 12px 22px;
    line-height: 1.1rem;
    font-size: 1.1rem;
    margin: 7px 0;
    margin-left: ${({ buttonmargin }) => buttonmargin || "0"};

    ${({ centered }) =>
      centered &&
      css`
        margin: 7px auto;
        display: block;
      `}
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    padding: 10px 20px;
    line-height: 1rem;
    font-size: 1rem;
    margin: 5px 0;
    margin-left: ${({ buttonmargin }) => buttonmargin || "0"};

    ${({ centered }) =>
      centered &&
      css`
        margin: 10px auto;
        display: block;
      `}
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    padding: 7px 15px;
    line-height: 0.8rem;
    font-size: 0.8rem;
    margin: 5px 0;
    margin-left: ${({ buttonmargin }) => buttonmargin || "0"};

    ${({ centered }) =>
      centered &&
      css`
        margin: 10px auto;
        display: block;
      `}
  }
`;
