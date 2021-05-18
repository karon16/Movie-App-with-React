import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Modal } from "semantic-ui-react";

const MediaOverviewContainer = styled.div`
  margin: 0 auto;
`;

const StyledIframe = styled.iframe`
  margin: 0 auto;
  height: 500px;
  border: none;

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    height: 500px;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    height: 370px;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    height: 300px;
  }
`;

const VideoOverview = ({ videoId, onClose, open, onOpen }) => {
  return (
    <MediaOverviewContainer>
      <Modal basic closeIcon onClose={onClose} onOpen={onOpen} open={open}>
        <Modal.Header>Bande d'annonce</Modal.Header>
        <Modal.Content>
          {videoId === undefined ? (
            "Video indisponible"
          ) : (
            <StyledIframe
              id="player"
              type="text/html"
              width="100%"
              src={`http://www.youtube.com/embed/${videoId}?autoplay=1?enablejsapi=1&origin=https://projet-kda-movie-app.netlify.app/`}
              frameborder="0"
              title="video"
            ></StyledIframe>
          )}
        </Modal.Content>
      </Modal>
    </MediaOverviewContainer>
  );
};

export default VideoOverview;
