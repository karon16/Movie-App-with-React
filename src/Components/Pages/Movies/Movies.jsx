import styled from "styled-components";
import NavigationGenreList from "../../Shared/NavigationGenre/NavigationGenreList";
import MovieHeroSection from "../../Shared/MovieHeroSection/MovieHeroSection";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import MovieSectionTitle from "../../Shared/MovieSectionTitle/MovieSectionTitle";
import { useContext, useState, useEffect, useReducer } from "react";
import { MovieGenresContext } from "../../Contexts/NavigationGenreContext";
// import { RenderMovieContext } from "../../Contexts/RenderMovieContext";

const StyledMovies = styled.div`
  width: 100vw;
  background: #0e1930;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "decrement":
      return state - 5;
    default:
      return initialState;
  }
};

const Movies = ({ match }) => {
  let movieUrlId = Number(match.params.id);

  // eslint-disable-next-line no-unused-vars
  const [movieGenres, setMovieGenres] = useContext(MovieGenresContext);
  const [actionMovies, setActionMovies] = useState([]);
  const [movieGenreTitle, setMovieGenreTile] = useState("Action");
  const [actionLimit, actionDispatch] = useReducer(reducer, initialState);

  const actionMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${movieUrlId}&with_watch_monetization_types=flatrate;`;

  useEffect(() => {
    fetch(actionMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        const actionMoviesList = data.results;
        setActionMovies(actionMoviesList);
      });
  }, [actionMoviesUrl]);

  let newMovieId = movieGenres.filter((genre) => genre.id === movieUrlId);

  const UpdateGenreTitle = () => {
    return setMovieGenreTile(newMovieId === undefined || newMovieId[0].name);
  };
  return (
    <>
      <MovieHeroSection bg={`https://image.tmdb.org/t/p/original${actionMovies.length === 0 || actionMovies[0].backdrop_path}`}>
        <MovieSectionTitle>Films</MovieSectionTitle>
      </MovieHeroSection>
      <StyledMovies className="section-padding">
        <NavigationGenreList genreList={movieGenres} onClick={UpdateGenreTitle} />
        <section id={movieGenres.length !== 0 ? movieGenres[0].id : ""}>
          <SectionTitle>{movieGenreTitle}</SectionTitle>
          <MinimalCardList mediaList={actionMovies.slice(0, actionLimit)} defined_media_type="movie" />
          <ButtonWrapper>
            {actionLimit >= 20 || (
              <Button animateprimary onClick={() => actionDispatch("increment")}>
                Voir Plus
              </Button>
            )}
            {actionLimit > 5 && (
              <Button animatesecondary secondary buttonmargin="10px" onClick={() => actionDispatch("decrement")}>
                Voir Moins
              </Button>
            )}
          </ButtonWrapper>
          <SectionDivider />
        </section>
      </StyledMovies>
    </>
  );
};
export default Movies;
