import ExplicitCard from "../ExplicitCard/ExplicitCard";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledExplicitCard = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: space-between;
`;

const ExplicitCardList = () => {
  const [popularMovies, setpopularMovies] = useState([]);
  const [popularTvs, setpopularTvs] = useState([]);

  const popularMoviesUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&page=1";
  const popularTvsUrl = "";

  const getPopularMovies = () => {
    fetch(popularMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        return data;
      });
  };

  getPopularMovies();

  return (
    <StyledExplicitCard>
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
    </StyledExplicitCard>
  );
};

export default ExplicitCardList;
