import styled from "styled-components";

const StyledDivider = styled.div`
  width: 100%;
  opacity: 0.5;
  height: 0.5px;
  background: ${({ theme }) => theme.colors.lightBlue};
  margin: ${({ theme }) => theme.sizes.defaultPaddingTop} auto;
`;

const SectionDivider = () => {
  return <StyledDivider></StyledDivider>;
};

export default SectionDivider;
