import MinimalCard from "../MinimalCard/MinimalCard";
import styled from "styled-components";

const StyledMinimalCardList = styled.div`
  /* padding: ${({ theme }) => theme.sizes.defaultPaddingTop}
    ${({ theme }) => theme.sizes.defaultPaddingSides}; */
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MinimalCardList = () => {
  return (
    <StyledMinimalCardList>
      <StyledRow>
        <MinimalCard />
        <MinimalCard />
        <MinimalCard />
        <MinimalCard />
        <MinimalCard />
      </StyledRow>
      <StyledRow>
        <MinimalCard />
        <MinimalCard />
        <MinimalCard />
        <MinimalCard />
        <MinimalCard />
      </StyledRow>
    </StyledMinimalCardList>
  );
};

export default MinimalCardList;
