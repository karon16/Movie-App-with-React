import Button from "../Button/Button";
import styled from "styled-components";
import GenreList from "../Genre/GenreList";
import { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const StyledHeroSection = styled.section`
  background: linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),
    url("${({ bg }) => bg}");
  background-size: cover;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .movie-title {
    font-size: 5rem;
    line-height: 5rem;
    font-family: ${({ theme }) => theme.fonts.biryani};
    margin: 0;
  }
  .movie-description {
    font-size: 1.4rem;
    width: 70%;
  }
  .movie-description,
  .movie-title {
    color: white;
    text-align: center;
  }
`;

const HeroSection = () => {
  const [trendingMedias, setTrendingMedias] = useState([]);

  const url = "https://api.themoviedb.org/3/trending/all/day?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";

  const getTrendingMedia = () => {
    return fetch(url)
      .then((response) => response.json())
      .then(({ results }) => {
        const trendingMediaList = results.slice(0, 5).map(({ backdrop_path, genre_ids, id, name, overview, media_type, title }) => {
          return {
            backdrop_path,
            genre_ids,
            id,
            name,
            overview,
            media_type,
            title,
          };
        });
        setTrendingMedias(trendingMediaList);
      });
  };
  useEffect(() => {
    getTrendingMedia();
  }, []);

  return (
    <>
      <Slide easing="ease" arrows={false} autoplay={true} pauseOnHover={false} duration={10000}>
        {trendingMedias.map((media, index) => {
          return (
            <div key={index}>
              <StyledHeroSection className="section-padding each-slide" bg={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}>
                <h2 className="movie-title">{media.name !== undefined ? media.name : media.title}</h2>
                <GenreList genre_ids={media.genre_ids} media_type={media.media_type} />

                <p className="movie-description">{`${media.overview.split(".")[0]}.`}</p>
                <div>
                  <Button animateprimary fontsize="1.5rem">
                    Bande d'annonce
                  </Button>
                  <Link to={`/${media.media_type}/${media.id}`}>
                    <Button buttonmargin="10px" secondary animatesecondary fontsize="1.3rem">
                      Plus d'Infos
                    </Button>
                  </Link>
                </div>
              </StyledHeroSection>
            </div>
          );
        })}
      </Slide>
    </>
  );
};

export default HeroSection;
