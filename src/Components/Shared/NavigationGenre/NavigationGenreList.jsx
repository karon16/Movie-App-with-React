import NavigationGenre from "./NavigationGenre";
import styled from "styled-components";

const StyledNavigationGenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
`;

const NavigationGenreList = ({ genreList, onClick, active, mediaType }) => {
  return (
    <StyledNavigationGenreList>
      {genreList.map((genre, index) => {
        return (
          <NavigationGenre key={index} id={genre.id} onClick={onClick} active={active} mediaType={mediaType}>
            {genre.name}
          </NavigationGenre>
        );
      })}
    </StyledNavigationGenreList>
  );
};

export default NavigationGenreList;
