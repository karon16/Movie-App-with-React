import Button from "../../Button/Button";
import MovieImage from "../../../img/bg.jpg";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const StyledExplicitCard = styled.div`
  /* width: calc((100%) - 10px); */

  width: 270px;
  background: #091326;

  .movie-image {
    width: 100%;
  }

  .movie-info-container {
    width: 100%;
    margin: 15px auto;
    padding: 10px;
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
  @media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
    width: 200px;
  }
`;

const ExplicitCard = ({ onClick }) => {
  return (
    <StyledExplicitCard>
      <div>
        <img src={MovieImage} alt="movie backdrop" className="movie-image" />
      </div>
      <div className="movie-info-container">
        <h3 className="movie-name">Movie name</h3>
        <p className="movie-duration">Duration</p>
        <div className="button-container">
          <Button cardbutton animateprimary onClick={onClick}>
            Bande d'annonce
          </Button>
          {/* <Link to="/movie-info"> */}
          <Button buttonmargin="10px" secondary cardbutton animatesecondary>
            Plus d'Infos
          </Button>
          {/* </Link> */}
        </div>

        <p className="movie-genre">Action &nbsp; Science-fiction &nbsp; Suspens</p>
      </div>
    </StyledExplicitCard>
  );
};

export default ExplicitCard;
