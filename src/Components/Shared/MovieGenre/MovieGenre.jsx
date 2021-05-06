import styled from "styled-components";

// const movieGenreContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const StyledGenre = styled.span`
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  padding: 2px 5px;
  font-size: 0.8rem;
  margin: 0 5px;
`;

const MovieGenre = ({ children }) => {
  return (
    // <movieGenreContainer>
    <StyledGenre>{children}</StyledGenre>
    // </movieGenreContainer>
  );
};

export default MovieGenre;
