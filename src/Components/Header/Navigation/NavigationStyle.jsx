import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLinks = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  min-width: 40%;
  margin-right: 5%;
  /* border: 1px solid white; */

  .active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightBlue};
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1200"]} {
    min-width: 50%;
 
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50%;
    margin-right: 0%;
  }
`;
export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.biryani};
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.lightBlue};
    transition: all 0.4s ease;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    font-size: 0.7rem;
  }
`;
