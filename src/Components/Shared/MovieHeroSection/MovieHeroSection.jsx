import { StyledMovieHeroSection } from "./MovieHeroSectionStyle";

const MovieHeroSection = ({ children, bg }) => {
  return (
    <StyledMovieHeroSection className="section-padding" bg={bg}>
      {children}
    </StyledMovieHeroSection>
  );
};

export default MovieHeroSection;
