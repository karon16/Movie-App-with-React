import ActorCard from "./ActorCard";
import styled from "styled-components";

const StyledActorCardList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ActorCardList = () => {
  return (
    <StyledActorCardList>
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
      <ActorCard />
    </StyledActorCardList>
  );
};

export default ActorCardList;
