import styled from "styled-components";

const StyledGenre = styled.span`
  color: ${({ theme }) => theme.colors.paleWhite};
  font-family: ${({ theme }) => theme.fonts.biryani};
  border: 1px solid ${({ theme }) => theme.colors.paleWhite};
  padding: 2px 10px;
  margin: 0px 10px;
  font-size: 0.8rem;
`;

const Genre = ({ children }) => {
  return (
    <>
      <StyledGenre>{children}</StyledGenre>;
    </>
  );
};

export default Genre;
