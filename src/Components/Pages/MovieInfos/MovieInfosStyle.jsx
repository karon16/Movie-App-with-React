import styled from "styled-components";

export const StyledHeroSection = styled.section`
  background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.4531262993478641) 95%),
    url("${({ bg }) => bg}");
  background-size: cover;


  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {

    background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.8531262993478641) 95%),
      url("${({ bg }) => bg}");
    background-size: cover;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
  }
`;

export const MediaVideoContainer = styled.div`
  background: #0e1930;
  width: 100vw;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;
