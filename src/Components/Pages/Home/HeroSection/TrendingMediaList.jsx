import Button from "../../../Shared/Button/Button";
import GenreList from "../../../Shared/Genre/GenreList";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { StyledHeroSection } from "./HeroSectionTrendingMediaStyle";

const TrendingMediaList = ({ trendingMedias }) => {
  return (
    <Slide easing="ease" arrows={false} autoplay={true} pauseOnHover={false} duration={10000}>
      {trendingMedias.map((media, index) => {
        return (
          <div key={index}>
            <StyledHeroSection className="section-padding each-slide" bg={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}>
              <h2 className="movie-title">{media.name !== undefined ? media.name : media.title}</h2>
              <GenreList genre_ids={media.genre_ids} media_type={media.media_type} />

              <p className="movie-description">{`${media.overview.split(".")[0]}.`}</p>
              <div>
                <Link to={`/${media.media_type}/${media.id}`}>
                  <Button buttonmargin="10px" primary animatesecondary fontsize="1.3rem" animation>
                    Plus d'Infos
                  </Button>
                </Link>
              </div>
            </StyledHeroSection>
          </div>
        );
      })}
    </Slide>
  );
};

export default TrendingMediaList;
