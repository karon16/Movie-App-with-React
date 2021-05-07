import MinimalCard from "../MinimalCard/MinimalCard";
import styled from "styled-components";

const StyledMinimalCardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MinimalCardList = () => {
  return (
    <StyledMinimalCardList>
      <MinimalCard />
      <MinimalCard />
      <MinimalCard />
      <MinimalCard />
      <MinimalCard />
    </StyledMinimalCardList>
  );
};

export default MinimalCardList;
