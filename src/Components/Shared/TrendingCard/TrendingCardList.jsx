import TrendingCard from "./TrendingCard";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const TrendingCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TrendingCardList = () => {
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  //   { width: 850, itemsToShow: 3 },
  //   { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  //   { width: 1450, itemsToShow: 5 },
  //   { width: 1750, itemsToShow: 6 },
  // ];
  return (
    // <TrendingCardContainer>
    <Carousel pagination={false} itemsToShow={2}>
      <TrendingCard />
      <TrendingCard />
    </Carousel>
    // </TrendingCardContainer>
  );
};

export default TrendingCardList;
