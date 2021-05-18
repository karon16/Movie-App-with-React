import NavigationGenre from "./NavigationGenre";
import styled from "styled-components";

const StyledNavigationGenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 10px 50px;
  top: 45px;
  position: sticky;
  z-index: 100;
  background: ${({ theme }) => theme.colors.darkBlue};

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    padding: 7px 30px;
    position: unset;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    padding: 5px 20px;
    position: unset;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    padding: 3px 10px;
    position: unset;
  }
`;

const NavigationGenreList = ({ genreList, onClick, mediaType }) => {
  return (
    <StyledNavigationGenreList>
      <NavigationGenre onClick={() => onClick(undefined)}>{mediaType === "films" ? "Tous les Films" : "Toutes les Series"}</NavigationGenre>
      {genreList.map((genre, index) => {
        return (
          <NavigationGenre
            key={index}
            id={genre.id}
            onClick={() => {
              onClick(genre.id);
            }}
            mediaType={mediaType}
          >
            {genre.name}
          </NavigationGenre>
        );
      })}
    </StyledNavigationGenreList>
  );
};

export default NavigationGenreList;
