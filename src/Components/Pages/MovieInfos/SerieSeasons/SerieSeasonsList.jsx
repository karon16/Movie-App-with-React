import styled from "styled-components";

const SeasonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: white;
`;

const Season = styled.div`
  
  width: calc((14%) - 10px);
  margin-right: 10px;
  margin-top: 10px;

  .image-cointainer {

  }
  .season-poster {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const SerieSeasonsList = ({ seasons }) => {
  return (
    <SeasonsWrapper>
      {seasons.map((season, index) => {
        return (
          <Season>
            <div className="image-cointainer">
              <img src={"https://image.tmdb.org/t/p/original/" + season.poster_path} alt={season.name} className="season-poster" />
            </div>
            <h3>{season.name}</h3>
            <p>{season.air_date}</p>
            <p>Total episodes : {season.episode_count}</p>
          </Season>
        );
      })}
    </SeasonsWrapper>
  );
};

export default SerieSeasonsList;
