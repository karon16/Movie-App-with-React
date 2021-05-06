import styled from "styled-components";
import Genre from "./Genre";
const GenreContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const GenreList = () => {
  return (
    <GenreContainer>
      <Genre>Jeuneusse</Genre>
      <Genre>Aventure</Genre>
      <Genre>Comédie</Genre>
    </GenreContainer>
  );
};

export default GenreList;
