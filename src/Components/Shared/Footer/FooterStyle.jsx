import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  background: ${({ theme }) => theme.colors.footer};
  padding: ${({ theme }) => theme.sizes.defaultPaddingTop};
  ${(theme) => theme.sizes.defaultPaddingSides};

  .footer-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 80%;
  }
  .footer-row-container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: ${({ theme }) => theme.sizes.defaultPaddingTop} 0px;
  }
  .tala-movies-logo {
    width: 100%;
    display: block;
    margin: 10px auto;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .margin-left {
    margin-left: 20px;
  }
  .icons {
    margin-top: 3%;
  }
  .social-media-icon:hover {
    color: ${({ theme }) => theme.colors.lightBlue} !important;
    transition: all 0.4s ease;
  }

  .social-media-icon {
    font-size: 1.7rem;
  }

  .copyright,
  .tmdb-message {
    text-align: center;
    color: ${({ theme }) => theme.colors.paleWhite};
    font-family: ${({ theme }) => theme.fonts.biryani};
    font-size: 0.8rem;
  }

  .tmbd-logo {
    width: 40%;
    display: block;
    margin: 10px auto;
  }
  .h-line {
    width: 60%;
    height: 0.5px;
    background: ${({ theme }) => theme.colors.lightBlue};
    margin-bottom: ${({ theme }) => theme.sizes.defaultPaddingTop};
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    .hidden {
      display: none;
    }
    .social-media-icon {
      font-size: 1rem;
    }
    .copyright,
    .tmdb-message {
      font-size: 0.6rem;
    }
    .tala-movies-logo {
      width: 50%;
    }
    .h-line {
      height: 0.3px;
    }
    .footer-main-container {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    .hidden-420 {
      display: none;
    }
    .social-media-icon {
      font-size: 0.8rem;
    }
    .icons {
      margin-top: 1.5%;
    }
    .footer-main-container {
      width: 100%;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.biryani};
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
    transition: all 0.4s ease;
  }

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-size: 0.9rem;
    `}
  ${({ subcategories }) =>
    subcategories &&
    css`
      color: ${({ theme }) => theme.colors.paleWhite};
    `}

    @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    font-size: 0.6rem;
  }
`;
