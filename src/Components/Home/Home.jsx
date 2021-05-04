import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/76341?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&append_to_response=images&include_image_language=fr,null"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  console.log(movie);
  return (
    <>
      <Header />
      <Footer />
      {/* <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="movie"
        />
      </div>
      <h1>{movie.title}</h1>
      <p>{[movie.overview]}</p> */}
    </>
  );
};

export default Home;
