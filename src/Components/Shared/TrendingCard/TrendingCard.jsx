import Button from "../Button/Button";
// import MovieImage from "../../img/bg.jpg";
import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";

const StyledTrendingCard = styled.div`
  width: calc((50%) - 10px);
  background: #091326;
  /* transition: transform 0.3s ease; */
  display: flex;

  .movie-image {
    width: 50%;
    object-fit: cover;
  }
  .image-container {
    border: 1px solid white;
    width: 45%;
  }
  .movie-info-container {
    width: 55%;
    padding: 15px;
    /* border: 1px solid white; */
  }
  .movie-name {
    color: ${({ theme }) => theme.colors.white};
  }
  .movie-genre {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.white};
  }
  .movie-duration {
    font-size: 1;
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
  }
`;

const TrendingCard = () => {
  return (
    <StyledTrendingCard>
      {/* <div className="image-container"> */}
      <img
        src="https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
        alt="movie backdrop"
        className="movie-image"
      />
      {/* </div> */}
      <div className="movie-info-container">
        <h3 className="movie-name">Movie name</h3>
        <p className="movie-duration">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error minus
          iusto deleniti iste, reiciendis aliquam eligendi saepe cum dolorem
          quisquam molestias adipisci unde? Blanditiis, optio laudantium!
          Numquam animi officiis voluptatibus!
        </p>
        <div className="button-container">
          <Button cardbutton animateprimary>
            Bande d'annonce
          </Button>
          <Button buttonmargin="10px" secondary cardbutton animatesecondary>
            Plus d'Infos
          </Button>
        </div>

        <p className="movie-genre">
          Action &nbsp; Science-fiction &nbsp; Suspens
        </p>
      </div>
    </StyledTrendingCard>
  );
};

export default TrendingCard;
