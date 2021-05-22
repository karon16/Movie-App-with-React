import styled from "styled-components";

export const StyledHeroSection = styled.section`
  background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),
    url("${({ bg }) => bg}") center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .movie-title {
    font-size: 5rem;
    line-height: 5rem;
    font-family: ${({ theme }) => theme.fonts.biryani};
    margin: 0;
  }
  .movie-description {
    font-size: 1.4rem;
    width: 70%;
  }
  .movie-description,
  .movie-title {
    color: white;
    text-align: center;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
    height: 60vh;
    .movie-title {
      font-size: 4rem;
      line-height: 4rem;
    }
    .movie-description {
      font-size: 1.2rem;
      width: 80%;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    height: 40vh;
    .movie-title {
      font-size: 4rem;
      line-height: 4rem;
    }
    .movie-description {
      font-size: 1.2rem;
      width: 80%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    height: 50vh;
    .movie-title {
      font-size: 3rem;
      line-height: 3rem;
    }
    .movie-description {
      font-size: 1.1rem;
      width: 90%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-580"]} {
    height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;

    .movie-title {
      font-size: 2.5rem;
      line-height: 2.5rem;
    }
    .movie-description {
      font-size: 1.15rem;
      width: 95%;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    height: 50vh;
    .movie-title {
      font-size: 2rem;
      line-height: 2rem;
    }
    .movie-description {
      font-size: 1rem;
      width: 90%;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    height: 50vh;
    .movie-title {
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
    .movie-description {
      font-size: 0.9rem;
      width: 95%;
    }
  }
`;
