import Button from "../Shared/Button/Button";
import DoubleArrows from "../img/doubleArrow.svg";
import Cinema from "../img/cinema.svg";
import { WelcomeMainContainer } from "./WelcomePageStyle";
import { Link } from "react-router-dom";
import ImageBackground from "../img/bg.jpg";
// import ImageBackground1 from "../img/bg1.jpg";
// import ImageBackground2 from "../img/bg2.jpg";
// import { useState, useEffect } from "react";

function WelcomePage({ bg }) {
  // const [moviesBackdrops, setMoviesBackdrops] = useState(ImageBackground);

  // useEffect(() => {
  //   HandleSlide();
  //   // return HandleSlide();
  // }, []);

  // const HandleSlide = () => {
  //   window.setInterval(() => {
  //     moviesBackdrops === ImageBackground
  //       ? setMoviesBackdrops(ImageBackground1)
  //       : setMoviesBackdrops(ImageBackground);
  //   }, 3000);
  // };

  return (
    <WelcomeMainContainer bg={ImageBackground}>
      <div className="cinema-logo-container">
        <img src={Cinema} alt="cinema icon" className="cinema-logo-image" />
      </div>
      <div>
        <p className="welcome-text--font-size font-Roboto ">
          Bienvenue sur <span className="font-Biryani">Tala.</span>
          <span className="font-Biryani color-light-blue bold-text">
            movies
          </span>
        </p>
        <p className="font-Roboto welcome-slogan ">
          La plateforme qui vous fournies les infos les plus récentes sur des
          films et series : Date de sortie, Casting, et autres ...
        </p>
      </div>
      <div>
        <img
          src={DoubleArrows}
          alt="double arrow icon"
          className="double-arrows"
        />
      </div>
      <Link to="/accueil">
        <Button animateprimary animation fontsize="1.7rem">
          Parcourir
        </Button>
      </Link>
    </WelcomeMainContainer>
  );
}

export default WelcomePage;
