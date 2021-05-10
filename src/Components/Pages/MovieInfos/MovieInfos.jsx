import styled from "styled-components";
import ActorCardList from "../../Shared/actorCard/ActorCardList";
import CardInfo from "../../Shared/CardInfo/CardInfo";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import SectionDivider from "../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import VideoOverview from "../../Shared/videoOverview/VideoOverview";
import "semantic-ui-css/semantic.min.css";
import { Modal } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Loader from "../../Shared/loading/loading";

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

const MovieInfos = ({ match }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loader, setLoader] = useState(false);
  const [mediaInfo, setMediaInfo] = useState();
  const [movieUrl, setMovieVideoUrl] = useState();
  const [similarMovies, setSimilarMovies] = useState();

  const urlSegment = match.url;

  let [type, movieId] = urlSegment.split("/").slice(1, 3);
  movieId = Number(movieId);

  console.log("type : ", type, "movieId : ", movieId);

  const similarMoviesUrl = `
  https://api.themoviedb.org/3/${type}/${movieId}/similar?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&page=1`;

  const url = `https://api.themoviedb.org/3${urlSegment}?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr`;
  const movieVideoUrl = `https://api.themoviedb.org/3/movie/${
    mediaInfo === undefined || mediaInfo.id
  }/videos?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr`;

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
  }, [movieVideoUrl, similarMoviesUrl, url]);

  console.log("movie similar", similarMovies);
  console.log("video url", movieUrl);

  return (
    <>
      {mediaInfo === undefined || (
        <>
          <StyledHeroSection className="section-padding" bg={`https://image.tmdb.org/t/p/original/${mediaInfo.backdrop_path}`}>
            <CardInfo mediaInfo={mediaInfo} onClick={ShowModal} />
          </StyledHeroSection>
          <MediaVideoContainer className="section-padding">
            <SectionDivider />
            <SectionTitle>Casting</SectionTitle>
            <ActorCardList />
            <SectionDivider />
            <SectionTitle>Titres similaires</SectionTitle>
            <MinimalCardList mediaList={[]} />
          </MediaVideoContainer>
          <Modal onClose={() => setOpenModal(false)} onOpen={() => setOpenModal(true)} open={openModal}>
            <VideoOverview mediaLink={mediaInfo.id} />
          </Modal>
        </>
      )}
    </>
  );
};

export default MovieInfos;
