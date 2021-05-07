import styled from "styled-components";
import ActorCardList from "../../Shared/actorCard/ActorCardList";
import CardInfo from "../../Shared/CardInfo/CardInfo";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList/MinimalCardList";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import VideoOverview from "../../Shared/videoOverview/VideoOverview";
import "semantic-ui-css/semantic.min.css";
import { Modal } from "semantic-ui-react";
import { useState } from "react";

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
`;

const MediaVideoContainer = styled.div`
  background: #0e1930;
  width: 100vw;
`;

const MovieInfos = () => {
  const [openModal, setOpenModal] = useState(false);

  const ShowModal = () => {
    return setOpenModal(true);
  };

  return (
    <>
      <StyledHeroSection
        className="section-padding"
        bg="https://image.tmdb.org/t/p/original/fPGeS6jgdLovQAKunNHX8l0avCy.jpg"
      >
        <CardInfo onClick={ShowModal} />
      </StyledHeroSection>
      <MediaVideoContainer className="section-padding">
        <SectionDivider />
        <SectionTitle>Casting</SectionTitle>
        <ActorCardList />
        <SectionDivider />
        <SectionTitle>Titres similaires</SectionTitle>
        <MinimalCardList />
      </MediaVideoContainer>
      <Modal
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}
        open={openModal}
      >
        <VideoOverview />
      </Modal>
    </>
  );
};

export default MovieInfos;
