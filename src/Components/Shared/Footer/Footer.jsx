import TlLogo from "../../img/logo-min.svg";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { StyledLink, StyledFooter } from "./FooterStyle";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-main-container">
        <div>
          <img
            src={TlLogo}
            alt="tala movies logo"
            className="tala-movies-logo"
          />
        </div>
        <div className="footer-row-container">
          <div className="flex-column footer-row-block">
            <StyledLink to="/accueil">Accueil</StyledLink>
            <StyledLink to="#">A propos</StyledLink>
            <StyledLink to="#">Contacts</StyledLink>
          </div>
          <div className="footer-row-block hidden-420">
            <StyledLink bold="bold" to="/films">
              Films
            </StyledLink>
            <div className="flex-row">
              <div className="flex-column">
                <StyledLink subcategories="true" to="#">
                  Action
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Drame
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Romantique
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Science-Fiction
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Histoire
                </StyledLink>
              </div>
              <div className="flex-column margin-left hidden">
                <StyledLink subcategories="true" to="#">
                  Fantastique
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Guerre
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Suspens
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Horreur
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Documentaire
                </StyledLink>
              </div>
            </div>
          </div>
          <div className="footer-row-block hidden-420">
            <StyledLink bold="bold" to="/series">
              Series
            </StyledLink>
            <div className="flex-row">
              <div className="flex-column">
                <StyledLink subcategories="true" to="#">
                  Action
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Drame
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Romantique
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Science-Fiction
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Histoire
                </StyledLink>
              </div>
              <div className="flex-column margin-left hidden">
                <StyledLink subcategories="true" to="#">
                  Fantastique
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Guerre
                </StyledLink>
                <StyledLink subcategories="true" to="#">
                  Suspens
                </StyledLink>
              </div>
            </div>
          </div>
          <div className="footer-row-block">
            <div className="flex-column">
              <StyledLink subcategories="true" to="#">
                Politique de confidentialité
              </StyledLink>
              <StyledLink subcategories="true" to="#">
                Conditions d’utilisation
              </StyledLink>
              <div className="icons">
                <Icon name="facebook" inverted className="social-media-icon" />
                <Icon name="instagram" inverted className="social-media-icon" />
                <Icon name="twitter" inverted className="social-media-icon" />
                <Icon name="linkedin" inverted className="social-media-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-line"></div>
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
          <p className="tmdb-message">
            Ce produit utilise l'API TMDb mais n'est ni approuvé ni certifié par
            TMDb.
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
