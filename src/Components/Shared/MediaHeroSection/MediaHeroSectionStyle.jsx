import styled from "styled-components";

export const StyledMovieHeroSection = styled.section`
  background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),
    url("${({ bg }) => bg}");
  background-size: cover;
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: flex-end;

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    height: 35vh;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    height: 40vh;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    height: 30vh;
  }
`;
