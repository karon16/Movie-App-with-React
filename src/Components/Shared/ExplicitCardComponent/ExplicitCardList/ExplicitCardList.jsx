import ExplicitCard from "../ExplicitCard/ExplicitCard";
// import styled from "styled-components";
import Carousel from "react-elastic-carousel";

// const StyledExplicitCard = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

const ExplicitCardList = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <Carousel pagination={false} breakPoints={breakPoints}>
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
    </Carousel>
  );
};

export default ExplicitCardList;
