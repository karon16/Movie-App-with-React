import Button from "../Button/Button";
import styled from "styled-components";
import GenreList from "../Genre/GenreList";
import { useState, useEffect } from "react";

const StyledHeroSection = styled.section`
  background: linear-gradient(
      0deg,
      rgba(14, 25, 48, 1) 11%,
      rgba(14, 25, 48, 0.7685324618128502) 45%,
      rgba(14, 25, 48, 0.2531262993478641) 95%
    ),
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

  const url =
    "https://api.themoviedb.org/3/trending/all/day?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(({ results }) => {
        console.log(results);
        const trendingMediaList = results
          .slice(0, 5)
          .map(
            ({ backdrop_path, genre_ids, id, name, overview, media_type }) => {
              return {
                backdrop_path,
                genre_ids,
                id,
                name,
                overview,
                media_type,
              };
            }
          );
        setTrendingMedias(trendingMediaList);
      });
  }, []);

  console.log(trendingMedias);
  return (
    <>
      {trendingMedias.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <StyledHeroSection
          className="section-padding"
          bg={`https://image.tmdb.org/t/p/original${trendingMedias[0].backdrop_path}`}
        >
          <h2 className="movie-title">{trendingMedias[0].name}</h2>
          <GenreList
            genre_ids={trendingMedias[0].genre_ids}
            media_type={trendingMedias[0].media_type}
          />

          {/* {console.log("genre_ids", trendingMedias[0].genre_ids)} */}
          <p className="movie-description">{trendingMedias[0].overview}</p>
          <div>
            <Button animateprimary fontsize="1.5rem">
              Bande d'annonce
            </Button>
            <Button
              buttonmargin="10px"
              secondary
              animatesecondary
              fontsize="1.3rem"
            >
              Plus d'Infos
            </Button>
          </div>
        </StyledHeroSection>
      )}
    </>
  );
};

export default HeroSection;
