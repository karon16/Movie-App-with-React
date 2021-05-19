import styled from "styled-components";

const StyledDivider = styled.div`
  width: 100%;
  opacity: 0.5;
  height: 0.5px;
  background: ${({ theme }) => theme.colors.lightBlue};
  margin: ${({ theme }) => theme.sizes.defaultPaddingTop} auto;

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    margin: 5% auto;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    margin: 7% auto;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-580"]} {
    margin: 8% auto;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    margin: 9% auto;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    margin: 10% auto;
  }
`;

const SectionDivider = () => {
  return <StyledDivider></StyledDivider>;
};

export default SectionDivider;
