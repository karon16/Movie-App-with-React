import { useState, useEffect, createContext } from "react";

export const MovieGenresContext = createContext();

export const MovieGenresProvider = ({ children }) => {
  const [movieGenres, setMovieGenres] = useState([]);

  const movieGenresUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";

  const getMovieGenres = () => {
    return fetch(movieGenresUrl)
      .then((response) => response.json())
      .then((data) => {
        const mappedMovieGenres = data.genres;
        setMovieGenres(mappedMovieGenres);
      });
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  return (
    <>
      <MovieGenresContext.Provider value={[movieGenres]}>{children}</MovieGenresContext.Provider>
    </>
  );
};

export const TvGenresProvider = ({ children }) => {
  const [tvGenres, setTvGenres] = useState([]);

  const tvGenresUrl = "https://api.themoviedb.org/3/genre/tv/list?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";

  const getTvGenres = () => {
    return fetch(tvGenresUrl)
      .then((response) => response.json())
      .then((data) => {
        const mappedTvGenres = data.genres;
        setTvGenres(mappedTvGenres);
      });
  };

  useEffect(() => {
    getTvGenres();
  }, []);

  return (
    <>
      <MovieGenresContext.Provider value={[tvGenres]}>{children}</MovieGenresContext.Provider>
    </>
  );
};
