import styled from "styled-components";

const StyledGenre = styled.span`
  color: ${({ theme }) => theme.colors.paleWhite};
  font-family: ${({ theme }) => theme.fonts.biryani};
  font-size: 0.8rem;
`;

const Genre = ({ children }) => {
  return (
    <>
      <StyledGenre>&bull; {children}&nbsp;&nbsp;</StyledGenre>
    </>
  );
};

export default Genre;
