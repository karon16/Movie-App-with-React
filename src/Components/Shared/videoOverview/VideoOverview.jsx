import styled from "styled-components";

const MediaOverviewContainer = styled.div`
  margin: 0 auto;
  height: 600px;
  .youtube-video {
    height: 500px;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    .youtube-video {
      height: 500px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    .youtube-video {
      height: 370px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    .youtube-video {
      height: 300px;
    }
  }
`;

const VideoOverview = ({ videoOverview }) => {
  return (
    <MediaOverviewContainer>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        // height={height}
        src={`http://www.youtube.com/embed/${videoOverview}?autoplay=1?enablejsapi=1&origin=https://projet-kda-movie-app.netlify.app/`}
        frameborder="0"
        title="video"
        className="youtube-video"
        autoplay="1"
      ></iframe>
    </MediaOverviewContainer>
  );
};

export default VideoOverview;
