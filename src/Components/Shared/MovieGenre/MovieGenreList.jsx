import MovieGenre from "./MovieGenre";
import styled from "styled-components";
const MovieGenreContainer = styled.div`
  display: flex;
`;

const MovieGenreList = () => {
  return (
    <MovieGenreContainer>
      {/* <MovieTitle>Sans aucun remord</MovieTitle> */}
      <MovieGenre>Action</MovieGenre>
      <MovieGenre>Suspens</MovieGenre>
      <MovieGenre>Science-Fiction</MovieGenre>
      <MovieGenre>Guerre</MovieGenre>
    </MovieGenreContainer>
  );
};

export default MovieGenreList;
