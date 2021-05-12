import styled from "styled-components";

const MediaOverviewContainer = styled.div`
  margin: 0 auto;
`;

const VideoOverview = ({ videoOverview }) => {
  return (
    <MediaOverviewContainer>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="500px"
        src={`http://www.youtube.com/embed/${videoOverview}?enablejsapi=1&origin=https://projet-kda-movie-app.netlify.app/`}
        frameborder="0"
        title="video"
      ></iframe>
    </MediaOverviewContainer>
  );
};

export default VideoOverview;
