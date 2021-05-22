import SectionDivider from "../../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { StyledMediaTrailer } from "./TrailerIframeStyle";

const TrailerIframe = ({ movieUrl }) => {
  return (
    <>
      {movieUrl === undefined || movieUrl.length === 0 ? (
        ""
      ) : (
        <StyledMediaTrailer>
          <SectionDivider />
          <SectionTitle>Trailer</SectionTitle>
          <div>
            <iframe
              id="player"
              type="text/html"
              width="100%"
              src={`http://www.youtube.com/embed/${movieUrl[0].key}?autoplay=1?enablejsapi=1&origin=https://projet-kda-movie-app.netlify.app/`}
              frameborder="0"
              title="video"
              className="trailer"
            ></iframe>
          </div>
        </StyledMediaTrailer>
      )}
    </>
  );
};

export default TrailerIframe;
