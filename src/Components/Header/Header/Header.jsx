import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import SearchInput from "../SearchInput/SearchInput";
import HeaderLogo from "../../img/logo-min.svg";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { NavigationBar } from "./HeaderStyle";

const Header = ({ onChange }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const HandleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <NavigationBar>
      <div>
        <img src={HeaderLogo} alt="tala movies logo" className="tala-movies-logo" />
      </div>
      <div className="nav-right-side-container">
        <div className={` nav-right-side ${toggleMenu ? "nav-active" : null}`}>
          <Navigation onClick={HandleClick} />
        </div>
        <SearchInput onChange={onChange} />

        <div onClick={HandleClick} className="burger-menu">
          {toggleMenu ? <Icon name="close" inverted className="burger-close--margin"/> : <Icon name="bars" inverted className="burger-bars--margin" />}
        </div>
      </div>
    </NavigationBar>
  );
};

export default Header;
