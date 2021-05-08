import MinimalCard from "../MinimalCard/MinimalCard";
import styled from "styled-components";

const StyledMinimalCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MinimalCardList = ({ mediaList }) => {
  return (
    <StyledMinimalCardList>
      {mediaList.map((media, index) => {
        return (
          <MinimalCard
            key={index}
            title={media.media_type === "movie" ? media.title : media.name}
            releaseDate={media.media_type === "movie" ? media.release_date : media.first_air_date}
            poster={media.poster_path}
          />
        );
      })}
    </StyledMinimalCardList>
  );
};

export default MinimalCardList;
