import styled from "styled-components";
import GenreList from "../../Shared/Genre/GenreList";

const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  margin-top: 7%;

  /* border: 1px solid white; */

  .movie-poster {
    width: 100%;
  }
  .movie-image-container {
    width: 20%;
  }
  .info-container {
    width: 40%;
    padding: 0 30px;
  }
  .movie-title {
    font-size: 3rem;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.biryani};
  }
  .movie-meta-container {
    display: flex;
    align-items: center;
  }
  .type-film {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1rem;
    margin: 0px;
  }
  .recommandation-percent {
    color: #04aa04;
  }
  .recommandation {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.paleWhite};
  }
  .overview-title,
  .director-title {
    font-size: 1.2rem;
    font-family: ${({ theme }) => theme.fonts.biryani};
  }

  .director-name,
  .overview {
    font-size: 1rem;
    font-weight: regular;
  }
`;

const CardInfo = () => {
  return (
    <StyledCard>
      <div className="movie-image-container">
        <img
          src="https://image.tmdb.org/t/p/w500/rEm96ib0sPiZBADNKBHKBv5bve9.jpg"
          alt="movie"
          className="movie-poster"
        />
      </div>
      <div className="info-container">
        <h3 className="movie-title">Tom Clancy's Without Remorse</h3>
        <div className="movie-meta-container">
          <h4 className="type-film">Film</h4>
          <GenreList />
        </div>
        <p className="recommandation">
          Recommandé à : <span className="recommandation-percent">90%</span>
        </p>
        <h4 className="overview-title">Aperçu</h4>
        <p className="overview">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          rerum, ullam cupiditate voluptas tenetur architecto, dolorem odit
          libero quibusdam ipsum a iure debitis perferendis dolorum velit nulla
          excepturi! Sit, eaque.
        </p>
        <h4 className="director-title">Realisateurs</h4>
        <em className="director-name">Christopher Buhendwa</em>
      </div>
    </StyledCard>
  );
};

export default CardInfo;
