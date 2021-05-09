import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";

const StyledNavigationGenre = styled(HashLink)`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.biryani};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
`;

const NavigationGenre = ({ children, id }) => {
  return (
    <>
      <StyledNavigationGenre scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "center", inline: "end" })} to={`/films/#${id}`}>
        {children}
      </StyledNavigationGenre>
    </>
  );
};

export default NavigationGenre;
