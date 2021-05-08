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
  width: 100vw;
`;

const Home = () => {
  return (
    <>
      <HeroSection />
      <StyledHome className="section-padding">
        {/* <SectionTitle>Bientôt en salle</SectionTitle> */}
        {/* <ExplicitCardList /> */}
        {/* <SectionDivider /> */}
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
