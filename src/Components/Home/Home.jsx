import { useState, useEffect } from "react";
// import Footer from "../Footer/Footer";
import ExplicitCardList from "../Shared/ExplicitCardComponent/ExplicitCardList/ExplicitCardList";
import styled from "styled-components";
import MinimalCardList from "../Shared/MinimalCardComponent/MinimalCardList/MinimalCardList";
import HeroSection from "../HeroSection/HeroSection";

const StyledHome = styled.div`
  background: #0e1930;
  padding: ${({ theme }) => theme.sizes.defaultPaddingTop}
    ${({ theme }) => theme.sizes.defaultPaddingSides};

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
    <>
      <HeroSection />
      <StyledHome>
        <div className="home-line"></div>
        <h3>Bientôt en salle</h3>
        <ExplicitCardList />
        <div className="home-line"></div>
        <h3>Fimls</h3>
        <MinimalCardList />
      </StyledHome>
    </>
  );
};

export default Home;
