import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import HeroSection from "./HeroSection/HeroSection";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { moviesUrl, tvsUrl } from "../../ApiLinks/ApiLinks";
import { StyledHome } from "./HomeStyle";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(moviesUrl)
      .then((response) => response.json())
      .then(({ results }) => {
        setMovies(results.slice(5, 15));
      });

    fetch(tvsUrl)
      .then((response) => response.json())
      .then(({ results }) => {
        setIsLoading(false);
        setTvs(results.slice(5, 15));
      });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <HeroSection />
      <StyledHome className="section-padding">
        <SectionTitle>Films Tendances</SectionTitle>
        <MinimalCardList mediaList={movies} isLoading={isLoading} />
        <Link to="/films">
          <Button animateprimary centered>
            Voir Plus
          </Button>
        </Link>
        <SectionDivider />
        <SectionTitle>Series Tendances</SectionTitle>
        <MinimalCardList mediaList={tvs} isLoading={isLoading} />
        <Link to="/series">
          <Button animateprimary centered>
            Voir Plus
          </Button>
        </Link>
      </StyledHome>
    </>
  );
};

export default Home;
