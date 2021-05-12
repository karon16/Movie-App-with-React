import Button from "../Button/Button";
import styled from "styled-components";
import GenreList from "../Genre/GenreList";
import { Link } from "react-router-dom";

const StyledMinimalCard = styled.div`
  width: calc((20%) - 10px);
  margin-bottom: 20px;
  transition: transform 0.4s ease;
  position: relative;

  .image-container {
    width: 100%;
  }

  .movie-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .movie-info-container {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    padding: 10px;
    display: none;
    opacity: 0;
  }
  .dark-box {
    top: 0;
    left: 0;
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

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    .movie-info-container {
      display: none;
    }
    &:hover {
      z-index: 1;
      transform: scale(1);
      box-shadow: 0px 0px 60px 0px rgba(0, 114, 244, 0.4);

      .dark-box {
        opacity: 0;
      }
      .movie-info-container {
        display: none;
      }
    }
  }
`;

const MinimalCard = ({ onClick, title, releaseDate, poster, genre_ids, media_type, id, defined_media_type }) => {
  return (
    <StyledMinimalCard>
      <div className="image-container">
        <Link to={`/${media_type === undefined ? defined_media_type : media_type}/${id}/#`}>
          <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt="movie backdrop" className="movie-image" />
          <div className="dark-box"></div>
        </Link>
      </div>
      <div className="movie-info-container">
        <h3 className="movie-name">{title}</h3>
        <p className="movie-duration">Sorti : {releaseDate}</p>
        <div className="button-container">
          <Button cardbutton animateprimary onClick={onClick}>
            Bande d'annonce
          </Button>
          <Link to={`/${media_type === undefined ? defined_media_type : media_type}/${id}`}>
            <Button buttonmargin="10px" secondary cardbutton animatesecondary>
              Plus d'Infos
            </Button>
          </Link>
        </div>
        <GenreList genre_ids={genre_ids} media_type={media_type} />
      </div>
    </StyledMinimalCard>
  );
};

export default MinimalCard;
