import Button from "../Button/Button";
import styled from "styled-components";
import GenreList from "../Genre/GenreList";
import { Link } from "react-router-dom";
import DefaultPoster from "../../img/Poster_overview.png";
import { LoadingSkeleton } from "../LoadingSkeleton/LoadingSkeleton";

const StyledMinimalCard = styled.div`
  width: calc((20%) - 10px);
  margin: 0 5px;
  margin-bottom: 15px;
  transition: transform 0.4s ease 0.2s;
  position: relative;
  height: 400px;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.5);
  text-align: center;

  .green {
    color: #04aa04;
  }
  .red {
    color: #f80303;
  }
  .orange {
    color: orange;
  }
  .image-container {
    width: 100%;
  }

  .recommandation--bold {
    font-weight: bold;
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
    /* display: none; */
    opacity: 0;
    transition: opacity 0.4s ease 0.2s;
  }
  .dark-box {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: all 0.3s ease 0.2s;
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
    justify-content: center;
  }
  .genre-list-container {
    display: flex;
    justify-content: center;
  }

  &:hover {
    z-index: 1;
    transform: scale(1.12);
    box-shadow: 0px 0px 60px 0px rgba(0, 114, 244, 0.4);

    .dark-box {
      opacity: 0.85;
    }
    .movie-info-container {
      /* display: block; */
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    height: 270px;
    margin: 0 5px;

    margin-bottom: 15px;

    .movie-info-container {
      display: none;
    }
    .movie-image {
      width: 100%;
      height: 300px;
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
  @media ${({ theme }) => theme.mediaQueries["bellow-900"]} {
    height: 250px;

    width: calc((25%) - 10px);
    margin-bottom: 15px;
    .movie-image {
      width: 100%;
      height: 250px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    height: 230px;

    width: calc((25%) - 10px);
    margin-bottom: 15px;
    .movie-image {
      width: 100%;
      height: 230px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-600"]} {
    height: 200px;

    width: calc((25%) - 10px);
    margin-bottom: 15px;
    .movie-image {
      width: 100%;
      height: 200px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-580"]} {
    height: 220px;

    width: calc((33%) - 10px);
    margin-bottom: 15px;
    .movie-image {
      width: 100%;
      height: 220px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    height: 190px;
    margin: 0 3px;
    margin-bottom: 20px;
    width: calc((34%) - 10px);
    margin-bottom: 15px;
    .movie-image {
      width: 100%;
      height: 190px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    height: 150px;

    width: calc((34%) - 10px);
    margin-bottom: 15px;
    .movie-image {
      width: 100%;
      height: 150px;
    }
  }
`;

const MinimalCard = ({ title, releaseDate, poster, genre_ids, media_type, id, defined_media_type, loading, vote_average }) => {
  const mediaAverage = Math.floor(vote_average * 10);
  const voteAverage = () => {
    if (mediaAverage < 55) {
      return "red";
    } else if (mediaAverage > 55 && mediaAverage < 70) {
      return "orange";
    } else {
      return "green";
    }
  };
  return (
    <>
      {loading ? (
        <StyledMinimalCard>
          <LoadingSkeleton />
        </StyledMinimalCard>
      ) : (
        <StyledMinimalCard>
          <div className="image-container">
            <Link to={`/${media_type === undefined ? defined_media_type : media_type}/${id}`}>
              <img
                src={`${poster === null ? DefaultPoster : `https://image.tmdb.org/t/p/w500/${poster}`}`}
                alt="movie backdrop"
                className="movie-image"
              />
              <div className="dark-box"></div>
            </Link>
          </div>
          <div className="movie-info-container">
            <h3 className="movie-name">{title}</h3>
            <p className="movie-duration">
              Recommandé à : <span className={`${voteAverage()} recommandation--bold`}>{`${mediaAverage}%`}</span>
            </p>
            <div className="button-container">
              <Link to={`/${media_type === undefined ? defined_media_type : media_type}/${id}`}>
                <Button primary cardbutton animatesecondary>
                  Plus d'Infos
                </Button>
              </Link>
            </div>
            <div className="genre-list-container">
              <GenreList genre_ids={genre_ids} media_type={media_type} />
            </div>
          </div>
        </StyledMinimalCard>
      )}
    </>
  );
};

export default MinimalCard;
