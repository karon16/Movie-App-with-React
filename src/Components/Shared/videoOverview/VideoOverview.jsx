import styled from "styled-components";

const MediaOverviewContainer = styled.div`
  margin: 0 auto;
`;

const VideoOverview = () => {
  return (
    <MediaOverviewContainer>
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="360"
        src="http://www.youtube.com/embed/SUXWAEX2jlg?enablejsapi=1&origin=https://projet-kda-movie-app.netlify.app/"
        frameborder="0"
        title="video"
      ></iframe>
    </MediaOverviewContainer>
  );
};

export default VideoOverview;