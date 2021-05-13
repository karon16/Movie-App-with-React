import NavigationGenre from "./NavigationGenre";
import styled from "styled-components";
import { useState } from "react";

const StyledNavigationGenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 10px 50px;
  /* position: sticky; */
  /* top: 10%; */
  z-index: 100;
  /* background: ${({ theme }) => theme.colors.darkBlue}; */
  /* background: rgba(9, 19, 38, 0.95); */

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    padding: 7px 30px;
    margin: 5px auto;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    padding: 5px 20px;
    margin: 6px auto;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    padding: 3px 10px;
    margin: 7px auto;
  }
`;

const NavigationGenreList = ({ genreList, onClick, mediaType }) => {
  const [activeClassName, setActiveClassName] = useState({
    activeElement: null,
    genreList: genreList.map((genre) => genre),
  });

  const toggleActiveClassName = (index) => {
    return setActiveClassName({ ...activeClassName, activeElement: activeClassName.genreList[index] });
  };

  const toggleActiveClassNameStyle = (index) => {
    return activeClassName.genreList[index] === activeClassName.activeElement ? "active" : null;
  };

  return (
    <StyledNavigationGenreList>
      {genreList.map((genre, index) => {
        return (
          <NavigationGenre
            key={index}
            id={genre.id}
            onClick={() => toggleActiveClassName(index)}
            mediaType={mediaType}
            className={toggleActiveClassNameStyle(index)}
          >
            {genre.name}
          </NavigationGenre>
        );
      })}
    </StyledNavigationGenreList>
  );
};

export default NavigationGenreList;
