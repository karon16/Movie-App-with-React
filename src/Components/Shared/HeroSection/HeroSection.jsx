import Button from "../Button/Button";
import styled from "styled-components";
// import Genre from "../Shared/Genre/Genre";
import GenreList from "../Genre/GenreList";

const StyledHeroSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(14, 25, 48, 1) 11%,
      rgba(14, 25, 48, 0.7685324618128502) 45%,
      rgba(14, 25, 48, 0.2531262993478641) 95%
    ),
    url("${({ bg }) => bg}");
  background-size: cover;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .movie-title {
    font-size: 5rem;
    line-height: 5rem;
    font-family: ${({ theme }) => theme.fonts.biryani};
    margin: 0;
  }
  .movie-description {
    font-size: 1.4rem;
    width: 70%;
  }
  .movie-description,
  .movie-title {
    color: white;
    text-align: center;
  }
`;

const HeroSection = () => {
  return (
    <StyledHeroSection
      className="section-padding"
      bg="https://image.tmdb.org/t/p/original/5g0gisu56NsCGiMa00HWINbc25X.jpg"
    >
      <h2 className="movie-title">Movie Title</h2>
      <GenreList />
      <p className="movie-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo animi
        commodi veritatis nobis, doloribus illo atque unde id asperiores
        voluptatem cum optio eum obcaecati reprehenderit porro. Quos atque
        molestias mollitia!
      </p>
      <div>
        <Button animateprimary fontsize="1.5rem">
          Bande d'annonce
        </Button>
        <Button
          buttonmargin="10px"
          secondary
          animatesecondary
          fontsize="1.3rem"
        >
          Plus d'Infos
        </Button>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
