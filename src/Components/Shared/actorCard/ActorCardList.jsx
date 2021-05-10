import ActorCard from "./ActorCard";
import styled from "styled-components";

const StyledActorCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const ActorCardList = ({ actorsList }) => {
  return (
    <StyledActorCardList>
      {actorsList.map((actor) => {
        return <ActorCard actorPicture={actor.profile_path} actorName={actor.name} />;
      })}
    </StyledActorCardList>
  );
};

export default ActorCardList;
