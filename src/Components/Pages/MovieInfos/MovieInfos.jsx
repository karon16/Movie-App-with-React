import styled from "styled-components";
import ActorCardList from "../../Shared/actorCard/ActorCardList";
import CardInfo from "../../Shared/CardInfo/CardInfo";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import VideoOverview from "../../Shared/videoOverview/VideoOverview";

const StyledHeroSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(14, 25, 48, 1) 11%,
      rgba(14, 25, 48, 0.7685324618128502) 45%,
      rgba(14, 25, 48, 0.2531262993478641) 95%
    ),
    url("${({ bg }) => bg}");
  background-size: cover;
  width: 100vw;
  /* padding-top: 7%; */
`;

const MediaVideoContainer = styled.div`
  background: #0e1930;
  width: 100vw;
`;

const MovieInfos = () => {
  return (
    <>
      <StyledHeroSection
        className="section-padding"
        bg="https://image.tmdb.org/t/p/original/fPGeS6jgdLovQAKunNHX8l0avCy.jpg"
      >
        <CardInfo />
      </StyledHeroSection>
      <MediaVideoContainer className="section-padding">
        <VideoOverview />
        <SectionDivider />
        <SectionTitle>Casting</SectionTitle>
        <ActorCardList />
      </MediaVideoContainer>
    </>
  );
};

export default MovieInfos;
