import styled from "styled-components";
import Genre from "./Genre";
import { useState, useEffect } from "react";

const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const GenreList = ({ genre, media_type }) => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);

  const movieGenresUrl =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";
  const tvGenresUrl =
    "https://api.themoviedb.org/3/genre/tv/list?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";

  const getMovieGenres = () => {
    return fetch(movieGenresUrl)
      .then((response) => response.json())
      .then((data) => {
        const mappedMovieGenres = data.genres;
        setMovieGenres(mappedMovieGenres);
      });
  };

  const getTvGenres = () => {
    return fetch(tvGenresUrl)
      .then((response) => response.json())
      .then((data) => {
        const mappedTvGenres = data.genres;
        setTvGenres(mappedTvGenres);
      });
  };

  useEffect(() => {
    getMovieGenres();
    getTvGenres();
  }, []);

  console.log("genres", movieGenres);
  //fetch movie genre List {id : Number , name : String}
  //fetch tv genre List {id : Number , name : String}

  return (
    //receive movie genre List from parents
    //map it anc compare with both List
    <GenreContainer>
      <Genre>{genre}</Genre>
      <Genre>{genre}</Genre>
      <Genre>{genre}</Genre>
    </GenreContainer>
  );
};

export default GenreList;
