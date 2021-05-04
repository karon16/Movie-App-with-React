import { StyledLink, NavigationLinks } from "./NavigationStyle";

const Navigation = ({ onClick }) => {
  return (
    <NavigationLinks>
      <li>
        <StyledLink to="/accueil" className="active" onClick={onClick}>
          Accueil
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/films" onClick={onClick}>
          Films
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/series" onClick={onClick}>
          Series
        </StyledLink>
      </li>
    </NavigationLinks>
  );
};

export default Navigation;
