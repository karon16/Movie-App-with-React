import MinimalCard from "./MinimalCard";
import styled from "styled-components";

const StyledMinimalCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: ${({ minHeight }) => minHeight || "850px"};

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    min-height: ${({ minHeight }) => minHeight || "600px"};
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    min-height: ${({ minHeight }) => minHeight || "600px"};
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    min-height: ${({ minHeight }) => minHeight || "600px"};
  }
`;

const MinimalCardList = ({ mediaList, defined_media_type, isLoading, minHeight }) => {
  return (
    <StyledMinimalCardList minHeight={minHeight}>
      {mediaList.map((media, index) => {
        return (
          <>
            {isLoading ? (
              <MinimalCard loading={true} />
            ) : (
              <MinimalCard
                key={index}
                title={media.title !== undefined ? media.title : media.name}
                releaseDate={media.release_date !== undefined ? media.release_date : media.first_air_date}
                poster={media.poster_path}
                genre_ids={media.genre_ids}
                media_type={media.media_type}
                defined_media_type={defined_media_type}
                id={media.id}
              />
            )}
          </>
        );
      })}
    </StyledMinimalCardList>
  );
};

export default MinimalCardList;
