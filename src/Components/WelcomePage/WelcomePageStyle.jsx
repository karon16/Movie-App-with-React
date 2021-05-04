import styled, { keyframes } from "styled-components";
import ImageBackground from "../img/bg.jpg";

const bouncingArrows = keyframes`
from{
  transform : translateY(40%);
}to{
  transform : translateY(0%);

}`;

export const WelcomeMainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  /* background: rgb(14, 25, 48); */
  background: linear-gradient(
      0deg,
      rgba(14, 25, 48, 1) 11%,
      rgba(14, 25, 48, 0.7685324618128502) 45%,
      rgba(14, 25, 48, 0.2531262993478641) 95%
    ),
    url("${ImageBackground}");
  display: flex;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  padding: 20px;

  .welcome-text--font-size {
    font-size: 3rem;
    line-height: 3rem;
  }
  .color-light-blue {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
  .welcome-slogan {
    width: 70%;
    margin: 0 auto;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.paleWhite} !important;
  }
  .double-arrows {
    margin: 30px 0;
    animation: 0.8s ${bouncingArrows} ease-out alternate infinite;
    width: 100%;
  }
  .border {
    border: 1px solid white;
  }
  .cinema-logo-container {
    margin-bottom: 20px;
  }
  .cinema-logo-image {
    width: 100%;
    max-width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    .cinema-logo-image {
      width: 80%;
    }
    .welcome-text--font-size {
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 5px;
    }
    .welcome-slogan {
      font-size: 1rem;
    }
    .double-arrows {
      width: 70%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    .cinema-logo-image {
      width: 50%;
    }
    .welcome-text--font-size {
      font-size: 1.5rem;
      line-height: 1.5rem;
      margin-bottom: 5px;
    }
    .welcome-slogan {
      font-size: 0.8rem;
    }
    .double-arrows {
      width: 50%;
    }
  }
`;
