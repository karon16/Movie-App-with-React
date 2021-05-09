import { createContext, useState, useEffect } from "react";

export const RenderMovieContext = createContext();

export const ActionMovieProvider = ({ children }) => {
  const [actionMovies, setActionMovies] = useState([]);

  const actionMoviesUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate";
  const aventureMovieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12&with_watch_monetization_types=flatrate";

  const ComedyMovieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate";
  const crimeMovieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80&with_watch_monetization_types=flatrate";

  const getActionMoviesUrl = () => {
    return fetch(actionMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        const actionMoviesList = data.results;
        setActionMovies(actionMoviesList);
      });
  };

  useEffect(() => {
    getActionMoviesUrl();
  }, []);

  return <RenderMovieContext.Provider value={[actionMovies]}>{children}</RenderMovieContext.Provider>;
};

