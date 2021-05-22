import styled from "styled-components";

export const StyledHeroSection = styled.section`
  background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.4531262993478641) 95%),
    url("${({ bg }) => bg}") center center;
  background-size: cover;
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
