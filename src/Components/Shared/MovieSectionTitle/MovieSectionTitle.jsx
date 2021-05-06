import styled from "styled-components";

const StytledMovieSectionTitle = styled.h2`
  color: white;
  display: inline-block;
  border-bottom: 10px solid ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 5rem;
  line-height: 7rem;
  letter-spacing: 0.2rem;
`;

const MovieSectionTitle = ({ children }) => {
  return <StytledMovieSectionTitle>{children}</StytledMovieSectionTitle>;
};

export default MovieSectionTitle;
