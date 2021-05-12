import styled from "styled-components";
import NavigationGenreList from "../../Shared/NavigationGenre/NavigationGenreList";
import MovieHeroSection from "../../Shared/MovieHeroSection/MovieHeroSection";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
// import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import MovieSectionTitle from "../../Shared/MovieSectionTitle/MovieSectionTitle";
import { useContext, useReducer, useEffect, useState } from "react";
import { MovieGenresContext } from "../../Contexts/NavigationGenreContext";

const StyledSeries = styled.div`
  background: #0e1930;
  width: 100vw;
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

const Series = ({ match }) => {
  let serieUrlId = Number(match.params.id);

  // eslint-disable-next-line no-unused-vars
  const [tvGenres, setTvGenres] = useContext(MovieGenresContext);
  const [limit, dispatch] = useReducer(reducer, initialState);
  const [series, setSeries] = useState([]);
  const [serieGenreTitle, setSerieGenreTile] = useState("Action & Adventure");

  const seriesUrl = `https://api.themoviedb.org/3/discover/tv?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=${limit}&with_genres=${serieUrlId}&with_watch_monetization_types=flatrate;`;
  let updatedGenreId = tvGenres.find((genre) => genre.id === serieUrlId);

  // console.log(newMovieId)

  const UpdateGenreTitle = () => {
    setSerieGenreTile(updatedGenreId === undefined || updatedGenreId.name);
  };

  useEffect(() => {
    fetch(seriesUrl)
      .then((response) => response.json())
      .then((data) => {
        const seriesList = data.results;
        setSeries(seriesList);
      });
  }, [seriesUrl]);

  useEffect(() => {
    dispatch("reinit");
    UpdateGenreTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serieUrlId]);

  console.log(
    `https://image.tmdb.org/t/p/original${
      series.length !== 0 && series[0].backdrop_path !== null ? series[0].backdrop_path : "/4OeX0dKmalJ7EUBats8NpV0YMD1.jpg"
    }`
  );

  return (
    <>
      <MovieHeroSection bg={`https://image.tmdb.org/t/p/original${series.length !== 0 ? series[0].backdrop_path : ""}`}>
        <MovieSectionTitle>Series</MovieSectionTitle>
      </MovieHeroSection>
      <StyledSeries className="section-padding">
        <NavigationGenreList genreList={tvGenres} mediaType="series" />
        <SectionTitle>{serieGenreTitle}</SectionTitle>
        <MinimalCardList mediaList={series.filter((serie) => serie.poster_path !== null)} defined_media_type="tv" />
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
      </StyledSeries>
    </>
  );
};
export default Series;
