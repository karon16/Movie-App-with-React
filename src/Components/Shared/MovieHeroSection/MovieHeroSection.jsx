import styled from "styled-components";

const StyledMovieHeroSection = styled.section`
  background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),
    url("${({ bg }) => bg}");
  background-size: cover;
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: flex-end;
  /* padding-top: 7% !important; */ 
`;

const MovieHeroSection = ({ children, bg }) => {
  return (
    <StyledMovieHeroSection className="section-padding" bg={bg}>
      {children}
    </StyledMovieHeroSection>
  );
};

export default MovieHeroSection;
