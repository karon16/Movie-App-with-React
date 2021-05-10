import styled from "styled-components";
import GenreList from "../../Shared/Genre/GenreList";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { useState } from "react";

const StyledCard = styled.div`
  display: flex;
  justify-content: flex-start;
  color: rgb(255, 255, 255);
  margin-top: 7%;

  .movie-poster {
    width: 100%;
  }
  .movie-image-container {
    width: 20%;
    position: relative;
  }
  .movie-image-container:hover .play-icon {
    /* display: block; */
    opacity: 1;
  }
  .info-container {
    width: 60%;
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
  .green {
    color: #04aa04;
  }
  .red {
    color: #f80303;
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
  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.5;
    transition: all 0.4s ease;
    /* display: none; */
  }
  .jeereq {
    position: relative;
    width: 100%;
  }
`;

const CardInfo = ({ onClick, mediaInfo }) => {
  const [voteAverage, setVoteAverage] = useState("green");
  // console.log(mediaInfo.vote_average);

  console.log("card media : ", mediaInfo.genres);
  return (
    <>
      {mediaInfo === undefined || (
        <StyledCard>
          <div className="movie-image-container">
            <div className="jeereq">
              <img src={`https://image.tmdb.org/t/p/w500/${mediaInfo.poster_path}`} alt="movie" className="movie-poster" onClick={onClick} />
              <Icon name="play" inverted size="huge" className="play-icon" onClick={onClick} />
            </div>
          </div>
          <div className="info-container">
            <h3 className="movie-title">{mediaInfo.name !== undefined ? mediaInfo.name : mediaInfo.title}</h3>
            <div className="movie-meta-container">
              {/* <h4 className="type-film">Film</h4> */}
              <GenreList genre_ids={mediaInfo.genres.map((genre) => genre.id)} media_type={mediaInfo.type} />
            </div>
            <p className="recommandation">
              Recommandé à : <span className={voteAverage}>{`${mediaInfo.vote_average * 10}%`}</span>
            </p>
            <h4 className="overview-title">Aperçu</h4>
            <p className="overview">{mediaInfo.overview}</p>
            <h4 className="director-title">Realisateurs</h4>
            {mediaInfo.created_by !== undefined ? (
              mediaInfo.created_by.map(({ name }) => <em className="director-name">{name} &nbsp;&nbsp;</em>)
            ) : (
              <em className="director-name">Realisateurs : Données Indisponibles</em>
            )}
          </div>
        </StyledCard>
      )}
    </>
  );
};

export default CardInfo;
