import { useEffect, useState } from "react";
import LoadingAnimation from "../../Shared/loading/loading";
import styled from "styled-components";
// import axios from "axios";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import Button from "../../Shared/Button/Button";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const SearchWrapper = styled.div`
  background: rgb(14, 25, 48);
  width: 100vw;
  min-height: 100vh;
  padding-top: 7%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  margin: 0px auto;
`;

const Search = ({ userQuery }) => {
  const [movieType, setMovieType] = useState("movie");
  const [searhedMovies, setSearhedMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  const url = `https://api.themoviedb.org/3/search/${movieType}?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&query=${userQuery}&page=1&include_adult=false `;

  const fetchMovies = (event) => {
    setMovieType("movie");
    // event.target.className = "active";
  };

  const fetchSeries = () => {
    setMovieType("tv");
  };

  const getSearchedMovies = async () => {
    setLoader(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoader(false);
      setSearhedMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchedMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <SearchWrapper className="section-padding">
      {loader ? (
        <LoadingAnimation />
      ) : (
        <>
          <ButtonWrapper>
            <Button animatesecondary secondary onClick={fetchMovies}>
              Film
            </Button>
            <Button animatesecondary secondary buttonmargin="10px" onClick={fetchSeries}>
              Series
            </Button>
          </ButtonWrapper>
          <SectionTitle>Resultat pour : {userQuery}</SectionTitle>

          <MinimalCardList
            mediaList={searhedMovies === undefined || searhedMovies.length === 0 ? [] : searhedMovies}
            defined_media_type={movieType === "movie" ? "movie" : "tv"}
          />
        </>
      )}
    </SearchWrapper>
  );
};

export default Search;
