
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  background: ${({ theme }) => theme.colors.footer};
  padding: ${({ theme }) => theme.sizes.defaultPaddingTop};
  ${({ theme }) => theme.sizes.defaultPaddingSides};
  text-align: center;

  .footer-main-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    width: 80%;
  }
  .tala-movies-logo {
    width: 100%;
    display: block;
    margin: 10px auto;
  }

  .copyright,
  .tmdb-message {
    color: ${({ theme }) => theme.colors.paleWhite};
    font-family: ${({ theme }) => theme.fonts.biryani};
    font-size: 0.8rem;
  }

  .tmbd-logo {
    width: 40%;
    display: block;
    margin: 10px auto;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    .copyright,
    .tmdb-message {
      font-size: 0.6rem;
    }
    .tala-movies-logo {
      width: 50%;
    }
    .footer-main-container {
      width: 100%;
    }
  }
`;
