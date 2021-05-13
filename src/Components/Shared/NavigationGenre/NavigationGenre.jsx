import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavigationGenre = styled(Link)`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.biryani};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
`;

const NavigationGenre = ({ children, id, onClick, mediaType, className }) => {
  return (
    <>
      <StyledNavigationGenre to={`/${mediaType}/${id}`} onClick={onClick} id={id} className={className}>
        {children}
      </StyledNavigationGenre>
    </>
  );
};

export default NavigationGenre;
