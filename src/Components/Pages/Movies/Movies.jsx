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

  .active {
    color: red;
  }
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
      return state - 1;
    case "reinit":
      return initialState;
    case "goTo500":
      return (state = 500);
    default:
      return initialState;
  }
};

const Movies = ({ match }) => {
  let movieUrlId = Number(match.params.id);

  // eslint-disable-next-line no-unused-vars
  const [movieGenres, setMovieGenres] = useContext(MovieGenresContext);
  const [movies, setMovies] = useState([]);
  const [movieGenreTitle, setMovieGenreTile] = useState("Action");
  const [limit, dispatch] = useReducer(reducer, initialState);

  const actionMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=${limit}&with_genres=${movieUrlId}&with_watch_monetization_types=flatrate;`;
  let newMovieId = movieGenres.find((genre) => genre.id === movieUrlId);

  // console.log(newMovieId)

  const UpdateGenreTitle = () => {
    setMovieGenreTile(newMovieId === undefined || newMovieId.name);
  };

  useEffect(() => {
    fetch(actionMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        const actionMoviesList = data.results;
        setMovies(actionMoviesList);
        // window.scrollTo({ top: 0, behavior: "smooth" });
      });
  }, [actionMoviesUrl]);

  useEffect(() => {
    dispatch("reinit");
    UpdateGenreTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieUrlId]);

  return (
    <>
      <MovieHeroSection bg={`https://image.tmdb.org/t/p/original${movies.length !== 0 ? movies[0].backdrop_path : ""}`}>
        <MovieSectionTitle>Films</MovieSectionTitle>
      </MovieHeroSection>
      <StyledMovies className="section-padding">
        <NavigationGenreList genreList={movieGenres} onClick={UpdateGenreTitle} mediaType="films" />
        <section id={movieGenres.length !== 0 ? movieGenres[0].id : ""}>
          <SectionTitle>{movieGenreTitle}</SectionTitle>
          <MinimalCardList mediaList={movies} defined_media_type="movie" />
          <ButtonWrapper>
            {limit > 1 && (
              <Button animatesecondary secondary onClick={() => dispatch("reinit")}>
                {limit - limit + 1}
              </Button>
            )}
            {limit === 1 || (
              <>
                <Button animatesecondary secondary buttonmargin="10px" onClick={() => dispatch("decrement")}>
                  -
                </Button>
              </>
            )}
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
            <Button animateprimary secondary buttonmargin="10px" onClick={() => dispatch("goTo500")}>
              500
            </Button>
          </ButtonWrapper>
        </section>
      </StyledMovies>
    </>
  );
};
export default Movies;
