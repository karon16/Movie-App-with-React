import TrendingCard from "./TrendingCard";
import styled from "styled-components";

const TrendingCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TrendingCardList = () => {
  return (
    <TrendingCardContainer>
      <TrendingCard />
      <TrendingCard />
    </TrendingCardContainer>
  );
};

export default TrendingCardList;
