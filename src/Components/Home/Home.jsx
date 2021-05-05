import { useState, useEffect } from "react";
// import Footer from "../Footer/Footer";
import ExplicitCardList from "../Shared/ExplicitCardComponent/ExplicitCardList/ExplicitCardList";
import styled from "styled-components";
import MinimalCardList from "../Shared/MinimalCardComponent/MinimalCardList/MinimalCardList";

const StyledHome = styled.div`
  background: #0e1930;
  padding: ${({ theme }) => theme.sizes.defaultPaddingTop}
    ${({ theme }) => theme.sizes.defaultPaddingSides};

  .home-line {
    width: 100%;
    height: 0.5px;
    background: ${({ theme }) => theme.colors.lightBlue};
    margin: ${({ theme }) => theme.sizes.defaultPaddingTop} auto;
  }

  h3 {
    color: white;
  }
`;

const Home = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=ff3f7a6f9e9804bf8c152b62e26b928c"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  console.log(movie);
  return (
    <StyledHome>
      <div className="home-line"></div>
      <h3>Nouveautés</h3>
      <ExplicitCardList />
      <div className="home-line"></div>
      <h3>En ce moment</h3>
      <MinimalCardList />
      {/* <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/oLy2V6AWSEfdPgKOtrSGnwB3Q2R.jpg`}
          alt="movie"
        />
      </div>
      <h1>{movie.title}</h1>
      <p>{[movie.overview]}</p> */}
    </StyledHome>
  );
};

export default Home;
