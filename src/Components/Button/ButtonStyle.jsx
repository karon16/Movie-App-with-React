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
  padding: 5px 25px;
  border: none;
  outline: none;
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.biryani};
  animation: 1.5s ${fadeIn} ease;

  ${({ secondary }) =>
    secondary &&
    css`
      background: none;
      border: 2px solid white;
    `}

  &:hover {
    ${({ animateSecondary }) =>
      animateSecondary &&
      css`
        background-color: rgba(250, 250, 250, 0.2);
        transition: all 0.4s ease-out;
        box-shadow: 0px 0px 10px 0px rgba(250, 250, 250, 0.1);
      `}
    ${({ animatePrimary }) =>
      animatePrimary &&
      css`
        transition: all 0.4s ease;
        background-color: rgb(3, 91, 190);
        box-shadow: 0px 0px 10px 0px rgba(250, 250, 250, 0.1);
      `}
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    font-size: 1rem;
  }
`;
