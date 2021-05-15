import styled from "styled-components";

export const StytledMovieSectionTitle = styled.h2`
  color: white;
  display: inline-block;
  border-bottom: 10px solid ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 5rem;
  line-height: 7rem;
  letter-spacing: 0.2rem;

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    font-size: 4rem;
    line-height: 5rem;
    letter-spacing: 0.15rem;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    font-size: 3rem;
    line-height: 4rem;
    letter-spacing: 0.12rem;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: 0.1rem;
  }
`;
