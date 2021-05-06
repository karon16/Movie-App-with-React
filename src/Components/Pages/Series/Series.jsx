import styled from "styled-components";
import NavigationGenreList from "../../Shared/NavigationGenre/NavigationGenreList";
import MovieHeroSection from "../../Shared/MovieHeroSection/MovieHeroSection";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList/MinimalCardList";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import Button from "../../Shared/Button/Button";
import MovieSectionTitle from "../../Shared/MovieSectionTitle/MovieSectionTitle";

const StyledSeries = styled.div`
  background: #0e1930;
  padding: ${({ theme }) => theme.sizes.defaultPaddingTop}
    ${({ theme }) => theme.sizes.defaultPaddingSides};
`;

const Series = () => {
  return (
    <>
      <MovieHeroSection>
        <MovieSectionTitle>Series</MovieSectionTitle>
      </MovieHeroSection>
      <StyledSeries>
        <NavigationGenreList />
        <SectionTitle>Action</SectionTitle>
        <MinimalCardList />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Action</SectionTitle>
        <MinimalCardList />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Science-Fiction</SectionTitle>
        <MinimalCardList />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Animation</SectionTitle>
        <MinimalCardList />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Drame</SectionTitle>
        <MinimalCardList />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
        <SectionTitle>Suspens</SectionTitle>
        <MinimalCardList />
        <Button animateprimary centered>
          Voir Plus
        </Button>
        <SectionDivider />
      </StyledSeries>
    </>
  );
};
export default Series;