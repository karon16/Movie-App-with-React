import TlLogo from "../../img/logo-min.svg";
import "semantic-ui-css/semantic.min.css";
import { StyledFooter } from "./FooterStyle";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-main-container">
        <div>
          <img src={TlLogo} alt="tala movies logo" className="tala-movies-logo" />
        </div>
        <p className="copyright">
          Copyright © 2021 Tala.movies <br></br>Tous droits reservés.
        </p>
        <div>
          <div>
            <img
              className="tmbd-logo"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
              alt="logo the movie data base"
            />
          </div>
          <p className="tmdb-message">Ce produit utilise l'API TMDb mais n'est ni approuvé ni certifié par TMDb.</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
