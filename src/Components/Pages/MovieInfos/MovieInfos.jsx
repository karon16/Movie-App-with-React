import ActorCardList from "./actorCard/ActorCardList";
import CardInfo from "../../Shared/CardInfo/CardInfo";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import VideoOverview from "../../Shared/videoOverview/VideoOverview";

import { useState, useEffect, useReducer } from "react";
import Button from "../../Shared/Button/Button";
import { StyledHeroSection, MediaVideoContainer, ButtonWrapper } from "./MovieInfosStyle";
import TrailerIframe from "./TrailerIframe/TrailerIframe";
import Recommandations from "./Recommandations/Recommandations";

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "decrement":
      return state - 5;
    case "reinit":
      return initialState;
    default:
      return initialState;
  }
};

const MovieInfos = ({ match }) => {
  const [openModal, setOpenModal] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false);
  const [mediaInfo, setMediaInfo] = useState();
  const [movieUrl, setMovieVideoUrl] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [actionLimit, actionDispatch] = useReducer(reducer, initialState);

  const urlSegment = match.url;

  // eslint-disable-next-line no-unused-vars
  let [type, movieId] = urlSegment.split("/").slice(1, 3);

  const apiUrl = "https://api.themoviedb.org/3";
  const personalKey = process.env.REACT_APP_API_KEY;
  const similarMoviesUrl = `${apiUrl}${urlSegment}/similar?api_key=${personalKey}&language=fr&page=1`;

  const url = `${apiUrl}${urlSegment}?api_key=${personalKey}&language=fr`;
  const movieVideoUrl = `${apiUrl}${urlSegment}/videos?api_key=${personalKey}&language=fr`;
  const [isLoading, setIsLoading] = useState(true);

  const ShowModal = () => {
    return setOpenModal(true);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMediaInfo(data);
      });
    fetch(movieVideoUrl)
      .then((response) => response.json())
      .then((data) => {
        setMovieVideoUrl(data.results);
      });

    fetch(similarMoviesUrl)
      .then((response) => response.json())
      .then((data) => {
        const similarMoviesList = data.results;
        setSimilarMovies(similarMoviesList);
      });
    actionDispatch("reinit");
    setIsLoading(false);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [movieVideoUrl, similarMoviesUrl, url]);

  return (
    <>
      <StyledHeroSection
        className="section-padding"
        bg={mediaInfo === undefined ? " " : `https://image.tmdb.org/t/p/original/${mediaInfo.backdrop_path}`}
      >
        <CardInfo mediaInfo={mediaInfo} onClick={ShowModal} movieUrl={movieUrl} type={type} />
      </StyledHeroSection>
      <MediaVideoContainer className="section-padding">
        <TrailerIframe movieUrl={movieUrl} />
        <SectionDivider />

        <SectionTitle>Casting</SectionTitle>
        <ActorCardList urlSegment={urlSegment} />
        {similarMovies !== undefined &&
          (similarMovies.length !== 0 ? (
            <>
              <SectionDivider />
              <SectionTitle>Titres similaires</SectionTitle>
              <MinimalCardList
                mediaList={similarMovies !== undefined ? similarMovies.slice(0, actionLimit) : []}
                defined_media_type={type === "movie" ? "movie" : "tv"}
                minHeight="400"
                isLoading={isLoading}
              />
              <ButtonWrapper>
                {actionLimit > 5 && (
                  <Button animatesecondary secondary onClick={() => actionDispatch("decrement")}>
                    Voir Moins
                  </Button>
                )}
                {actionLimit >= 20 || (
                  <Button animateprimary buttonmargin="10px" onClick={() => actionDispatch("increment")}>
                    Voir Plus
                  </Button>
                )}
              </ButtonWrapper>
            </>
          ) : null)}

        <Recommandations urlSegment={urlSegment} apiUrl={apiUrl} personalKey={personalKey} />
      </MediaVideoContainer>
      <VideoOverview
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}
        open={openModal}
        videoId={movieUrl === undefined || movieUrl.length === 0 ? undefined : movieUrl[0].key}
      />
    </>
  );
};

export default MovieInfos;
