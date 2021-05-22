import styled from "styled-components";

export const NavigationBar = styled.nav`
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
  .burger-close--margin {
    margin: 0px !important;
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
      top: 39px;
      height: 41px;
      width: 100vw;
      right: 0px;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateY(-200%);
      transition: all 0.5s ease-in-out 0.2s;
      z-index: -10;
    }
    .tala-movies-logo {
      width: 50%;
    }
    .nav-active {
      opacity: 1;
      transform: translateY(0%);
    }
    .nav-right-side-container {
      display: flex;
      justify-content: flex-end;
    }
    .burger-bars--margin {
      margin: 0px !important;
    }
  }
`;
