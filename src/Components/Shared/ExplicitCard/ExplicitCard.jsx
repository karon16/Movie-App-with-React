import Button from "../Button/Button";
import MovieImage from "../../img/bg.jpg";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const StyledExplicitCard = styled.div`
  width: calc((20%) - 10px);
  background: #091326;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 1);
  transition: transform 0.2s linear 0.3s;

  .movie-image {
    width: 100%;
  }

  .movie-info-container {
    /* padding: 10px auto; */
    /* border: 1px solid white; */
    width: 90%;
    margin: 15px auto;
  }
  .movie-name {
    color: ${({ theme }) => theme.colors.white};
  }
  .movie-genre {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
  }
  .movie-duration {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.paleWhite};
  }
  .movie-name,
  .movie-genre,
  .movie-duration {
    margin-bottom: 3px;
  }
  .button-container {
    display: flex;
    justify-content: flex-start;
  }
  .button-margin {
    margin-left: 10px !important;
  }
  &:hover {
    transform: scale(1.12);
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
  }
`;

const ExplicitCard = () => {
  return (
    <StyledExplicitCard>
      <div>
        <img src={MovieImage} alt="movie backdrop" className="movie-image" />
      </div>
      <div className="movie-info-container">
        <h3 className="movie-name">Movie name</h3>
        <p className="movie-duration">Duration</p>
        <div className="button-container">
          <Button cardButton animatePrimary>
            Bande d'annonce
          </Button>
          <Button buttonMargin="10px" secondary cardButton animateSecondary>
            Plus d'Infos
          </Button>
        </div>

        <p className="movie-genre">
          Action &nbsp; Science-fiction &nbsp; Suspens
        </p>
      </div>
    </StyledExplicitCard>
  );
};

export default ExplicitCard;
