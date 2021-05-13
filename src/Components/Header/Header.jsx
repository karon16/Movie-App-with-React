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
  z-index: 10;
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

  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    .burger-menu {
      display: block;
      cursor: pointer;
    }
    .nav-right-side {
      position: absolute;
      top: 41px;
      height: calc((100vh) - 40px);
      width: 100vw;
      right: 0px;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.5s ease 0.2s;
      z-index: 3;
    }
    .tala-movies-logo {
      width: 50%;
    }
    .nav-active {
      transform: translateX(0%);
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
      <div className={` nav-right-side ${toggleMenu ? "nav-active" : null}`}>
        <Navigation onClick={HandleClick} />
        <SearchInput onChange={onChange} />
      </div>
      <div onClick={HandleClick} className="burger-menu">
        {toggleMenu ? <Icon name="close" inverted /> : <Icon name="bars" inverted />}
      </div>
    </NavigationBar>
  );
};

export default Header;
