import styled from "styled-components";

const StyledNavigationGenre = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-family: ${({ theme }) => theme.fonts.biryani};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  padding: 10px 20px;
  margin: 5px;
  font-size: 1rem;
`;

const NavigationGenre = ({ children }) => {
  return (
    <>
      <StyledNavigationGenre>{children}</StyledNavigationGenre>;
    </>
  );
};

export default NavigationGenre;
