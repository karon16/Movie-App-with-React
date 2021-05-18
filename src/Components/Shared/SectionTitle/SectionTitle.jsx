import styled from "styled-components";

const StyledSectionTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  font-family: ${({ theme }) => theme.fonts.biryani};
  margin-bottom: ${({ theme }) => theme.sizes.defaultPaddingTop};
`;

const SectionTitle = ({ children }) => {
  return <StyledSectionTitle>{children}</StyledSectionTitle>;
};

export default SectionTitle;
