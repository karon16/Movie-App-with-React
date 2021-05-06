import { useState, useEffect } from "react";
import ExplicitCardList from "../../Shared/ExplicitCardComponent/ExplicitCardList/ExplicitCardList";
import styled from "styled-components";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList/MinimalCardList";
import HeroSection from "../../Shared/HeroSection/HeroSection";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";
import TrendingCardList from "../../Shared/TrendingCard/TrendingCardList";

const StyledHome = styled.div`
  background: #0e1930;
  padding: ${({ theme }) => theme.sizes.defaultPaddingTop}
    ${({ theme }) => theme.sizes.defaultPaddingSides};
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
        <SectionTitle>Bientôt en salle</SectionTitle>
        <ExplicitCardList />
        <SectionDivider />
        <SectionTitle>Films</SectionTitle>
        <MinimalCardList />
        <Link to="/films">
          <Button animateprimary centered>
            Voir Plus
          </Button>
        </Link>
        <SectionDivider />
        <SectionTitle>Series</SectionTitle>
        <MinimalCardList />
        <Link to="/series">
          <Button animateprimary centered>
            Voir Plus
          </Button>
        </Link>
        <SectionDivider />
        <SectionTitle>Tendances actuelles</SectionTitle>
        <TrendingCardList />
      </StyledHome>
    </>
  );
};

export default Home;
