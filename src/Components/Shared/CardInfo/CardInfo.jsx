/* eslint-disable no-unused-vars */
import GenreList from "../../Shared/Genre/GenreList";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import DefaultPoster from "../../img/Poster_overview.png";
import { StyledCard } from "./CardInfoStyle";

const CardInfo = ({ onClick, mediaInfo, type }) => {
  const voteAverage = () => {
    if (mediaInfo.vote_average < 5.5) {
      return "red";
    } else if (mediaInfo.vote_average > 5.5 && mediaInfo.vote_average < 7) {
      return "orange";
    } else {
      return "green";
    }
  };

  const min = mediaInfo === undefined || mediaInfo.runtime % 60;
  const hour = mediaInfo === undefined || (mediaInfo.runtime - min) / 60;
  const runtime = `${hour}h ${min}min`;

  return (
    <>
      {mediaInfo === undefined || (
        <>
          <StyledCard>
            <div className="movie-image-container">
              <div className="jeereq">
                <img
                  src={`${mediaInfo.poster_path === null ? DefaultPoster : `https://image.tmdb.org/t/p/w500/${mediaInfo.poster_path}`}`}
                  alt="movie"
                  className="movie-poster"
                  onClick={onClick}
                />
                <Icon name="play" inverted size="huge" className="play-icon" onClick={onClick} />
              </div>
            </div>
            <div className="info-container">
              <h3 className="movie-title">{mediaInfo.name !== undefined ? mediaInfo.name : mediaInfo.title}</h3>
              {mediaInfo.type === "movie" || type === "movie" ? (
                <p>
                  <Icon name="clock" inverted />
                  {runtime}&nbsp; &nbsp; &nbsp;
                  <Icon name="calendar" inverted />
                  {mediaInfo.release_date}
                  &nbsp; &nbsp; &nbsp;
                  <Icon name="calendar" inverted />
                  {mediaInfo.production_countries[0].name}
                </p>
              ) : (
                <p>
                  <Icon name="video" inverted />
                  Total d'episodes : {mediaInfo.number_of_episodes} &nbsp; &nbsp; &nbsp;
                  <Icon name="file video" inverted />
                  Total de saisons : {mediaInfo.number_of_seasons}
                  &nbsp; &nbsp; &nbsp;
                  <Icon name="calendar" inverted />
                  {mediaInfo.first_air_date}
                  &nbsp; &nbsp; &nbsp;
                  <Icon name="flag" inverted />
                  {mediaInfo.production_countries[0].name}
                </p>
              )}

              <GenreList genre_ids={mediaInfo.genres.map((genre) => genre.id)} media_type={mediaInfo.type} fontsize="1rem" />
              <p className="recommandation">
                Recommandé à : <span className={voteAverage()}>{`${mediaInfo.vote_average * 10}%`}</span>
              </p>
              <h4 className="overview-title">Aperçu</h4>
              <p className="overview">{mediaInfo.overview}</p>
              <h4 className="director-title">Realisateurs</h4>
              {mediaInfo.created_by !== undefined ? (
                mediaInfo.created_by.map(({ name }, index) => (
                  <em key={index} className="director-name">
                    {name} &nbsp;&nbsp;
                  </em>
                ))
              ) : (
                <em className="director-name">Realisateurs : Données Indisponibles</em>
              )}
            </div>
          </StyledCard>
        </>
      )}
    </>
  );
};

export default CardInfo;
