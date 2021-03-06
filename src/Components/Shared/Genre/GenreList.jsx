import styled from "styled-components";
import Genre from "./Genre";
import { useState, useEffect } from "react";

const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
`;

const GenreList = ({ genre_ids, media_type, fontsize }) => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvGenres, setTvGenres] = useState([]);

  const movieGenresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr`;
  const tvGenresUrl = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr`;

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tvGenreTable = () => {
    const filledTvTable = [];
    for (let genre of tvGenres) {
      for (let id of genre_ids) {
        if (genre.id === id) {
          filledTvTable.push(genre.name);
        }
      }
    }
    return filledTvTable;
  };

  const movieGenreTable = () => {
    const filledMovieTable = [];
    for (let genre of movieGenres) {
      for (let id of genre_ids) {
        if (genre.id === id) {
          filledMovieTable.push(genre.name);
        }
      }
    }
    return filledMovieTable;
  };

  return (
    <GenreContainer>
      {media_type === "tv" || media_type === "Miniseries"
        ? tvGenreTable()
            .slice(0, 2)
            .map((genre, id) => (
              <Genre key={id} fontsize={fontsize}>
                {genre}
              </Genre>
            ))
        : movieGenreTable()
            .slice(0, 2)
            .map((genre, id) => (
              <Genre key={id} fontsize={fontsize}>
                {genre}
              </Genre>
            ))}
    </GenreContainer>
  );
};

export default GenreList;
