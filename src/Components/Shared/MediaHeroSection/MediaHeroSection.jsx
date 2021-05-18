import { StyledMovieHeroSection } from "./MediaHeroSectionStyle";

const MovieHeroSection = ({ children, bg }) => {
  return (
    <StyledMovieHeroSection className="section-padding" bg={bg}>
      {children}
    </StyledMovieHeroSection>
  );
};

export default MovieHeroSection;
