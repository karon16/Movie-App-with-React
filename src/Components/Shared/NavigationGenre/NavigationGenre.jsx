import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavigationGenre = styled(Link)`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.biryani};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
  &:focus {
    color: white !important;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    padding: 7px 17px;
    font-size: 0.8rem;
    margin: 4px;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    padding: 4px 14px;
    font-size: 0.7rem;
    margin: 3px;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    padding: 2px 12px;
    font-size: 0.6rem;
    margin: 2px;
  }
`;

const NavigationGenre = ({ children, id, onClick, mediaType, className }) => {
  return (
    <>
      <StyledNavigationGenre onClick={onClick} id={id} className={className}>
        {children}
      </StyledNavigationGenre>
    </>
  );
};

export default NavigationGenre;
