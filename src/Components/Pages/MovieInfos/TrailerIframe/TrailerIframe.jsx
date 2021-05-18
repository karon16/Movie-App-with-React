import styled from "styled-components";
import SectionDivider from "../../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const StyledMediaTrailer = styled.div`
  width: 100%;
  position: relative;
  display: none;
  margin-top: 50px;

  .trailer {
    width: 100%;
    height: 500px;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    .trailer {
      height: 500px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    .trailer {
      height: 370px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    .trailer {
      height: 300px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    .trailer {
      height: 250px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-900"]} {
    display: block;
  }
`;

const TrailerIframe = ({ movieUrl }) => {
  return (
    <>
      <StyledMediaTrailer>
        <SectionDivider />
        <SectionTitle>Trailer</SectionTitle>
        <div>
          {movieUrl === undefined || movieUrl.length === 0 ? (
            "video Indisponible"
          ) : (
            <iframe
              id="player"
              type="text/html"
              width="100%"
              src={`http://www.youtube.com/embed/${movieUrl[0].key}?autoplay=1?enablejsapi=1&origin=https://projet-kda-movie-app.netlify.app/`}
              frameborder="0"
              title="video"
              className="trailer"
            ></iframe>
          )}
        </div>
      </StyledMediaTrailer>
    </>
  );
};

export default TrailerIframe;
