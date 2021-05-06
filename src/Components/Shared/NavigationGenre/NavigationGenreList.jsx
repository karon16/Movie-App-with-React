import NavigationGenre from "./NavigationGenre";
import styled from "styled-components";

const StyledNavigationGenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
`;

const NavigationGenreList = () => {
  return (
    <StyledNavigationGenreList>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
      <NavigationGenre>Actions</NavigationGenre>
    </StyledNavigationGenreList>
  );
};

export default NavigationGenreList;
