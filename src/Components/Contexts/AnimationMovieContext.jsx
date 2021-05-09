import { createContext, useState, useEffect } from "react";

export const AnimationMovieContext = createContext();

export const AnimationMovieProvier = ({ children }) => {
  const [animationMovies, setAnimationMovies] = useState([]);

  const animationMovieUrl =
    "https://api.themoviedb.org/3/discover/movie?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate";

  const getAnimationMoviesUrl = () => {
    return fetch(animationMovieUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        const animationMovieUrl = data.results;
        setAnimationMovies(animationMovieUrl);
      });
  };
  useEffect(() => {
    getAnimationMoviesUrl();
  }, []);

  return <AnimationMovieContext.Provider value={[animationMovies]}>{children}</AnimationMovieContext.Provider>;
};
