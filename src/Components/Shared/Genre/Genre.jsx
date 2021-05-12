import styled from "styled-components";

const StyledGenre = styled.span`
  color: ${({ theme }) => theme.colors.paleWhite};
  font-family: ${({ theme }) => theme.fonts.biryani};
  font-size: ${({ fontsize }) => fontsize || "0.8rem"};

  .bull--color {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const Genre = ({ children, fontsize }) => {
  return (
    <>
      <StyledGenre fontsize={fontsize}>
        <span className="bull--color">&bull;</span> {children}&nbsp;&nbsp;
      </StyledGenre>
    </>
  );
};

export default Genre;
