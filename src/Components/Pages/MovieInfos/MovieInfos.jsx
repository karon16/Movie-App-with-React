import styled from "styled-components";
import ActorCardList from "../../Shared/actorCard/ActorCardList";
import CardInfo from "../../Shared/CardInfo/CardInfo";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import VideoOverview from "../../Shared/videoOverview/VideoOverview";
import "semantic-ui-css/semantic.min.css";
import { Modal } from "semantic-ui-react";
import { useState, useEffect, useReducer } from "react";
import Loader from "../../Shared/loading/loading";
import Button from "../../Shared/Button/Button";

const StyledHeroSection = styled.section`
  background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),
    url("${({ bg }) => bg}");
  background-size: cover;
  width: 100vw;
`;

const MediaVideoContainer = styled.div`
  background: #0e1930;
  width: 100vw;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "decrement":
      return state - 5;
    default:
      return initialState;
  }
};

const MovieInfos = ({ match }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [mediaInfo, setMediaInfo] = useState();
  const [movieUrl, setMovieVideoUrl] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [actors, setSActors] = useState([]);
  const [actionLimit, actionDispatch] = useReducer(reducer, initialState);

  const urlSegment = match.url;
  console.log("match", match);

  let [type, movieId] = urlSegment.split("/").slice(1, 3);
  movieId = Number(movieId);

  const apiUrl = "https://api.themoviedb.org/3";
  const personalKey = "api_key=ff3f7a6f9e9804bf8c152b62e26b928c";
  const similarMoviesUrl = `${apiUrl}${urlSegment}/similar?${personalKey}&language=fr&page=1`;

  const url = `${apiUrl}/${type}/${movieId}?${personalKey}&language=fr`;
  console.log(url);
  const movieVideoUrl = `${apiUrl}/${type}/${mediaInfo === undefined || mediaInfo.id}/videos?${personalKey}&language=fr`;

  const actorsUrl = `${apiUrl}${urlSegment}/credits?${personalKey}&language=fr`;

  const ShowModal = () => {
    return setOpenModal(true);
  };

  useEffect(() => {
    setLoader(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const singleMediaInfo = data;
        setLoader(false);
        setMediaInfo(singleMediaInfo);
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
    fetch(actorsUrl)
      .then((response) => response.json())
      .then((data) => {
        const actorMediaList = data.cast;
        setSActors(actorMediaList);
      });
    setLoader(false);
  }, [actorsUrl, movieVideoUrl, similarMoviesUrl, url]);

  console.log("movie similar", similarMovies);
  console.log("video url", movieUrl);
  console.log("actors", actors);
  console.log("mediaInfo", mediaInfo);

  return (
    <>
      {mediaInfo === undefined ? (
        <Loader />
      ) : (
        <>
          <StyledHeroSection className="section-padding" bg={`https://image.tmdb.org/t/p/original/${mediaInfo.backdrop_path}`}>
            <CardInfo mediaInfo={mediaInfo} onClick={ShowModal} />
          </StyledHeroSection>
          <MediaVideoContainer className="section-padding">
            <SectionDivider />
            <SectionTitle>Casting</SectionTitle>
            <ActorCardList actorsList={actors.filter((actor) => actor.profile_path !== null).slice(0, 20)} />
            <SectionDivider />
            <SectionTitle>Titres similaires</SectionTitle>
            <MinimalCardList
              mediaList={similarMovies !== undefined ? similarMovies.slice(0, actionLimit) : []}
              defined_media_type={type === "movie" ? "movie" : "tv"}
            />
            <ButtonWrapper>
              {actionLimit >= 20 || (
                <Button animateprimary onClick={() => actionDispatch("increment")}>
                  Voir Plus
                </Button>
              )}
              {actionLimit > 5 && (
                <Button animatesecondary secondary buttonmargin="10px" onClick={() => actionDispatch("decrement")}>
                  Voir Moins
                </Button>
              )}
            </ButtonWrapper>
          </MediaVideoContainer>
          <Modal onClose={() => setOpenModal(false)} onOpen={() => setOpenModal(true)} open={openModal}>
            <VideoOverview videoOverview={movieUrl === undefined || movieUrl.length === 0 ? "" : movieUrl[0].key} />
          </Modal>
        </>
      )}
    </>
  );
};

export default MovieInfos;
