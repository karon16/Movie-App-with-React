import styled from "styled-components";
import NavigationGenreList from "../../Shared/NavigationGenre/NavigationGenreList";
import MovieHeroSection from "../../Shared/MovieHeroSection/MovieHeroSection";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import MovieSectionTitle from "../../Shared/MovieSectionTitle/MovieSectionTitle";
import { useContext } from "react";
import { MovieGenresContext } from "../../Contexts/NavigationGenreContext";

const StyledMovies = styled.div`
  width: 100vw;
  background: #0e1930;
`;

const Movies = () => {
  const [movieGenres, setMovieGenres] = useContext(MovieGenresContext);
  console.log("movieGenres", movieGenres);
  return (
    <>
      <MovieHeroSection>
        <MovieSectionTitle>Films</MovieSectionTitle>
      </MovieHeroSection>
      <StyledMovies className="section-padding">
        <NavigationGenreList genreList={movieGenres} />
        <SectionTitle>Action</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Action</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Science-Fiction</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Animation</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Drame</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Suspens</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
      </StyledMovies>
    </>
  );
};
export default Movies;
