// import Button from "../../Shared/Button/Button";
import styled from "styled-components";
// import Genre from "../../Shared/Genre/Genre";
// import MovieSectionTitle from "../MovieSectionTitle/MovieSectionTitle";

const StyledMovieHeroSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(14, 25, 48, 1) 11%,
      rgba(14, 25, 48, 0.7685324618128502) 45%,
      rgba(14, 25, 48, 0.2531262993478641) 95%
    ),
    url("${({ bg }) => bg}");
  background-size: cover;
  width: 100vw;
  height: 70vh;
  padding: ${({ theme }) => theme.sizes.defaultPaddingTop};
  ${({ theme }) => theme.sizes.defaultPaddingSides};
  display: flex;
  align-items: flex-end;
`;

const MovieHeroSection = ({ children }) => {
  return (
    <StyledMovieHeroSection bg="https://image.tmdb.org/t/p/original/5g0gisu56NsCGiMa00HWINbc25X.jpg">
      {children}
    </StyledMovieHeroSection>
  );
};

export default MovieHeroSection;
