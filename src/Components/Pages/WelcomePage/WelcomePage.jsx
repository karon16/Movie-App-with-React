import Button from "../../Shared/Button/Button";
import DoubleArrows from "../../img/doubleArrow.svg";
import Cinema from "../../img/cinema.svg";
import { WelcomeMainContainer } from "./WelcomePageStyle";
import { Link } from "react-router-dom";
import ImageBackground from "../../img/bcg.png";
// import Multideviceimage from "../../img/multidevice.png";

const WelcomePage = () => {
  return (
    <>
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
          <Button animateprimary animation fontsize="1.5rem">
            Parcourir
          </Button>
        </Link>
      </WelcomeMainContainer>
      {/* <Cont className="cont">
        <div className="multi-device-image-container">
          <img
            src={Multideviceimage}
            alt="multi device"
            className="multi-device-image"
          />
        </div>

        <div className="text-container">
          <h2 className="multi-device-text">
            Votre plateforme Disponible sur plusieurs types d'écrans
          </h2>
          <ul>
            <li>Desktop</li>
            <li>Pc</li>
            <li>Tablette</li>
            <li>Mobile</li>
</ul>
        </div>
      </Cont> */}
    </>
  );
};

export default WelcomePage;
