import MinimalCard from "./MinimalCard";
import styled from "styled-components";

const StyledMinimalCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MinimalCardList = ({ mediaList, defined_media_type }) => {
  return (
    <StyledMinimalCardList>
      {mediaList.map((media, index) => {
        return (
          <MinimalCard
            key={index}
            title={media.media_type === "movie" || media.media_type === undefined ? media.title : media.name}
            releaseDate={media.media_type === "movie" || media.media_type === undefined ? media.release_date : media.first_air_date}
            poster={media.poster_path}
            genre_ids={media.genre_ids}
            media_type={media.media_type}
            defined_media_type={defined_media_type}
            id={media.id}
          />
        );
      })}
    </StyledMinimalCardList>
  );
};

export default MinimalCardList;
