import styled from "styled-components";
import NavigationGenreList from "../../Shared/NavigationGenre/NavigationGenreList";
import MovieHeroSection from "../../Shared/MovieHeroSection/MovieHeroSection";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import MovieSectionTitle from "../../Shared/MovieSectionTitle/MovieSectionTitle";

const StyledSeries = styled.div`
  background: #0e1930;
  width: 100vw;
`;

const Series = () => {
  return (
    <>
      <MovieHeroSection>
        <MovieSectionTitle>Series</MovieSectionTitle>
      </MovieHeroSection>
      <StyledSeries className="section-padding">
        <NavigationGenreList />
        <SectionTitle>Action</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Action</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Science-Fiction</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Animation</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Drame</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Suspens</SectionTitle>
        <MinimalCardList mediaList={[]} />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
      </StyledSeries>
    </>
  );
};
export default Series;
