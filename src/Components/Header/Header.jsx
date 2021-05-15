import { useState } from "react";
import Navigation from "./Navigation/Navigation";
import SearchInput from "./SearchInput/SearchInput";
import HeaderLogo from "../img/logo-min.svg";
import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

const NavigationBar = styled.nav`
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(9, 19, 38, 0.95);
  z-index: 1000;
  padding: 10px ${({ theme }) => theme.sizes.defaultPaddingSides};

  .nav-right-side {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60%;
  }
  .burger-menu {
    display: none;
  }
  .nav-right-side-container {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    .burger-menu {
      display: block;
      cursor: pointer;
    }
    .nav-right-side {
      position: absolute;
      top: 41px;
      height: 41px;
      width: 100vw;
      right: 0px;
      background-color: rgba(0, 0, 0, 0.95);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.5s ease-in-out 0.2s;
      z-index: -10;
    }
    .tala-movies-logo {
      width: 50%;
    }
    .nav-active {
      opacity: 1;

      transform: translateX(0%);
    }
    .nav-right-side-container {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

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
        <SearchInput onChange={onChange} onClick={HandleClick} />

        <div onClick={HandleClick} className="burger-menu">
          {toggleMenu ? <Icon name="close" inverted /> : <Icon name="bars" inverted />}
        </div>
      </div>
    </NavigationBar>
  );
};

export default Header;
