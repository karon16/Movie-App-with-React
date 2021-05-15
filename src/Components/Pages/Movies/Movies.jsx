import styled from "styled-components";
import NavigationGenreList from "../../Shared/NavigationGenre/NavigationGenreList";
import MovieHeroSection from "../../Shared/MovieHeroSection/MovieHeroSection";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Button from "../../Shared/Button/Button";
import MovieSectionTitle from "../../Shared/MovieSectionTitle/MovieSectionTitle";
import { useContext, useState, useEffect, useReducer } from "react";
import { MovieGenresContext } from "../../Contexts/NavigationGenreContext";

const StyledMovies = styled.div`
  width: 100vw;
  background: #0e1930;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;

const initialState = 1;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state === 1 ? 1 : state - 1;
    case "reinit":
      return initialState;
    case "goTo500":
      return (state = 500);
    default:
      return initialState;
  }
};

const Movies = ({ match }) => {
  // eslint-disable-next-line no-unused-vars
  const [movieGenres, setMovieGenres] = useContext(MovieGenresContext);
  const [movies, setMovies] = useState([]);
  const [movieGenreTitle, setMovieGenreTile] = useState();
  const [limit, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [activeGenre, setActiveGenre] = useState();

  const actionMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&${
    activeGenre === undefined ? "" : "with_genres=" + activeGenre
  }&include_video=false&page=${limit}&with_watch_monetization_types=flatrate;`;

  console.log(movies);
  let updatedGenreId = movieGenres.find((genre) => genre.id === activeGenre);

  const UpdateGenreTitle = () => {
    setMovieGenreTile(updatedGenreId === undefined ? "Tous les Films" : updatedGenreId.name);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(actionMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setMovies(data.results);
      });
    UpdateGenreTitle();
  }, [actionMoviesUrl]);

  const handleClick = (id) => {
    setActiveGenre(id);
  };

  useEffect(() => {
    dispatch("reinit");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MovieHeroSection bg={`https://image.tmdb.org/t/p/original${movies.length !== 0 ? movies[0].backdrop_path : ""}`}>
        <MovieSectionTitle>Films</MovieSectionTitle>
      </MovieHeroSection>
      <NavigationGenreList genreList={movieGenres} mediaType="films" onClick={handleClick} />

      <StyledMovies className="section-padding">
        <section id={movieGenres.length !== 0 ? movieGenres[0].id : ""}>
          <SectionTitle>{movieGenreTitle}</SectionTitle>

          <MinimalCardList mediaList={movies} defined_media_type="movie" isLoading={isLoading} />
          <ButtonWrapper>
            <>
              <Button animatesecondary secondary buttonmargin="10px" onClick={() => dispatch("decrement")}>
                -
              </Button>
            </>
            {limit >= 499 || (
              <>
                <Button animateprimary buttonmargin="10px">
                  {limit}
                </Button>
                <Button animatesecondary secondary buttonmargin="10px" onClick={() => dispatch("increment")}>
                  +
                </Button>
              </>
            )}
          </ButtonWrapper>
        </section>
      </StyledMovies>
    </>
  );
};
export default Movies;
