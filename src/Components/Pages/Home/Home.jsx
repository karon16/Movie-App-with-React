import styled from "styled-components";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import HeroSection from "../../Shared/HeroSection/HeroSection";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { HashLink } from "react-router-hash-link";

const StyledHome = styled.div`
  background: #0e1930;
  width: 100vw;
`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);

  const moviesUrl = "https://api.themoviedb.org/3/trending/movie/day?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";
  const tvsUrl = "https://api.themoviedb.org/3/trending/tv/day?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";

  console.log("tvs", tvs);
  const getMovies = () => {
    return fetch(moviesUrl)
      .then((response) => response.json())
      .then(({ results }) => {
        const mappedMovieData = results
          .slice(5, 15)
          .map(({ backdrop_path, genre_ids, id, name, overview, media_type, title, release_date, poster_path }) => {
            return { backdrop_path, genre_ids, id, name, overview, media_type, poster_path, title, release_date };
          });
        setMovies(mappedMovieData);
      });
  };

  const getTvs = () => {
    return fetch(tvsUrl)
      .then((response) => response.json())
      .then(({ results }) => {
        const mappedTvData = results
          .slice(5, 15)
          .map(({ backdrop_path, genre_ids, id, name, overview, media_type, title, first_air_date, poster_path }) => {
            return { backdrop_path, genre_ids, id, name, overview, media_type, title, first_air_date, poster_path };
          });
        setTvs(mappedTvData);
      });
  };

  useEffect(() => {
    getMovies();
    getTvs();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroSection />
      <StyledHome className="section-padding">
        <SectionTitle>Films Tendances</SectionTitle>
        <MinimalCardList mediaList={movies} />
        {console.log(movies)}
        <Link to="/films/28">
          <Button animateprimary centered>
            Voir Plus
          </Button>
        </Link>
        <SectionDivider />
        <SectionTitle>Series Tendances</SectionTitle>
        <MinimalCardList mediaList={tvs} />
        <Link to="/series/10759">
          <Button animateprimary centered>
            Voir Plus
          </Button>
        </Link>
      </StyledHome>
    </>
  );
};

export default Home;
