import Button from "../../Button/Button";
import styled from "styled-components";

const StyledMinimalCard = styled.div`
  width: calc((20%) - 10px);
  margin-bottom: 20px;
  transition: transform 0.4s ease;
  position: relative;

  .movie-image {
    width: 100%;
    object-fit: cover;
    z-index: 2;
  }
  .movie-info-container {
    bottom: 0;
    position: absolute;
    width: 100%;
    padding: 10px;
    display: none;
    opacity: 0;
  }
  .dark-box {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: all 0.3s ease;
  }
  .movie-name {
    color: ${({ theme }) => theme.colors.white};
  }
  .movie-genre {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
  }
  .movie-duration {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.paleWhite};
  }
  .movie-name,
  .movie-genre,
  .movie-duration {
    margin-bottom: 3px;
  }
  .button-container {
    display: flex;
    justify-content: flex-start;
  }

  &:hover {
    z-index: 1;
    transform: scale(1.12);
    box-shadow: 0px 0px 60px 0px rgba(0, 114, 244, 0.4);

    .dark-box {
      opacity: 0.85;
    }
    .movie-info-container {
      display: block;
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
  }
`;

const MinimalCard = () => {
  return (
    <StyledMinimalCard>
      <div>
        <img
          src="https://image.tmdb.org/t/p/w500/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg"
          alt="movie backdrop"
          className="movie-image"
        />
      </div>
      <div className="dark-box"></div>
      <div className="movie-info-container">
        <h3 className="movie-name">Movie name</h3>
        <p className="movie-duration">Duration</p>
        <div className="button-container">
          <Button cardbutton animateprimary>
            Bande d'annonce
          </Button>
          <Button buttonmargin="10px" secondary cardbutton animatesecondary>
            Plus d'Infos
          </Button>
        </div>

        <p className="movie-genre">
          Action &nbsp; Science-fiction &nbsp; Suspens
        </p>
      </div>
    </StyledMinimalCard>
  );
};

export default MinimalCard;
