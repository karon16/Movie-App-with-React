import Button from "../../Button/Button";
import MovieImage from "../../../img/bg4.jpg";
import styled from "styled-components";

const StyledMinimalCard = styled.div`
  width: calc((20%) - 10px);
  /* box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 1); */
  margin-bottom: 20px;
  transition: transform 0.3s ease-in;
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
    /* margin: 15px auto; */
    display: none;
    opacity: 0;
    transition: opacity 3s ease-in;
    z-index: 3;

    /* border: 1px solid white; */
  }
  .dark-box {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: all 0.4s ease-in;
    z-index: 1;
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
  .button-margin {
    margin-left: 10px !important;
  }
  &:hover {
    /* transform: scale(1.12); */
    .dark-box {
      opacity: 0.9;
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
          src="https://image.tmdb.org/t/p/w500/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg"
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
