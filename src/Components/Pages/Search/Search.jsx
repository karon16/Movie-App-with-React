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
  /* min-height: 100vh; */
  padding-top: 7%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 0px auto;
`;

const Search = ({ userQuery }) => {
  const [mediaType, setMediaType] = useState("movie");
  const [searhedMovies, setSearhedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&query=${userQuery}&page=1&include_adult=false `;

  const fetchMovies = (event) => {
    setMediaType("movie");
  };

  const fetchSeries = () => {
    setMediaType("tv");
  };

  const getSearchedMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setSearhedMovies(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getSearchedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <SearchWrapper className="section-padding">
      <>
        <ButtonWrapper>
          <Button animatesecondary secondary onClick={fetchMovies} className="focus">
            Film
          </Button>
          <Button animatesecondary secondary buttonmargin="10px" onClick={fetchSeries}>
            Series
          </Button>
        </ButtonWrapper>
        <SectionTitle>Resultat pour : {userQuery}</SectionTitle>

        <MinimalCardList
          mediaList={searhedMovies === undefined || searhedMovies.length === 0 ? [] : searhedMovies}
          defined_media_type={mediaType === "movie" ? "movie" : "tv"}
          isLoading={isLoading}
          minHeight="400px"
        />
      </>
    </SearchWrapper>
  );
};

export default Search;
