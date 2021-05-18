import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  color: rgb(255, 255, 255);
  margin-top: 7%;

  .movie-poster {
    width: 100%;
  }
  .movie-image-container {
    width: 25%;
    position: relative;
  }
  .movie-image-container:hover .play-icon {
    /* display: block; */
    opacity: 1;
  }
  .info-container {
    width: 65%;
    padding: 0 30px;
  }
  .movie-title {
    font-size: 4rem;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.biryani};
  }
  .movie-meta-container {
    display: flex;
    align-items: center;
  }
  .type-film {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1rem;
    margin: 0px;
  }
  .green {
    color: #04aa04;
  }
  .red {
    color: #f80303;
  }
  .orange {
    color: orange;
  }
  .recommandation {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.paleWhite};
  }
  .overview-title,
  .director-title {
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.biryani};
  }

  .director-name,
  .overview,
  .recommandation {
    font-size: 1.2rem;
    font-weight: regular;
    text-align: justify;
  }
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    transition: all 0.4s ease;
  }
  .jeereq {
    position: relative;
    width: 100%;
  }
  .logo-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
  .logo-container img {
    width: 5%;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
    .movie-image-container {
      width: 40%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    .movie-image-container {
      width: 50%;
    }
    .movie-title {
      font-size: 3rem;
    }
    .director-name,
    .overview,
    .recommandation {
      font-size: 1.1rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-900"]} {
    .movie-image-container {
      display: none;
    }
    .info-container {
      width: 100%;
      padding: 0px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    margin-top: 12%;

    .movie-title {
      font-size: 2.5rem;
    }
    .director-name,
    .overview,
    .recommandation {
      font-size: 1rem;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    margin-top: 15%;
    .director-name,
    .overview,
    .recommandation {
      font-size: 0.9rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    margin-top: 17%;
    .director-name,
    .overview,
    .recommandation {
      font-size: 0.8rem;
    }
  }
`;
