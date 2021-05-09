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
import { RenderMovieContext } from "../../Contexts/RenderMovieContext";
import { AnimationMovieContext } from "../../Contexts/AnimationMovieContext";

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

const Movies = () => {
  const [movieGenres, setMovieGenres] = useContext(MovieGenresContext);
  const [actionMovies, setActionMovies] = useContext(RenderMovieContext);
  const [animationMovies, setAnimationMovies] = useContext(AnimationMovieContext);

  const [actionLimit, actionDispatch] = useReducer(reducer, initialState);
  const [animationLimit, animationDispatch] = useReducer(reducer, initialState);

  return (
    <>
      <MovieHeroSection bg={`https://image.tmdb.org/t/p/original${movieGenres.length !== 0 ? actionMovies[0].backdrop_path : ""}`}>
        <MovieSectionTitle>Films</MovieSectionTitle>
      </MovieHeroSection>
      <StyledMovies className="section-padding">
        <NavigationGenreList genreList={movieGenres} />
        <section id={movieGenres.length !== 0 ? movieGenres[0].id : ""}>
          <SectionTitle>Action</SectionTitle>
          <MinimalCardList mediaList={actionMovies.slice(0, actionLimit)} />
          <ButtonWrapper>
            <Button animateprimary onClick={() => actionDispatch("increment")}>
              Voir Plus
            </Button>
            {actionLimit > 5 && (
              <Button animatesecondary secondary buttonmargin="10px" onClick={() => actionDispatch("decrement")}>
                Voir Moins
              </Button>
            )}
          </ButtonWrapper>
          <SectionDivider />
        </section>

        <section id={movieGenres.length !== 0 ? movieGenres[2].id : ""}>
          <SectionTitle>Animation</SectionTitle>
          <MinimalCardList mediaList={animationMovies.slice(0, animationLimit)} />
          <ButtonWrapper>
            <Button animateprimary onClick={() => animationDispatch("increment")}>
              Voir Plus
            </Button>
            {animationLimit > 5 && (
              <Button animatesecondary secondary buttonmargin="10px" onClick={() => animationDispatch("decrement")}>
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
