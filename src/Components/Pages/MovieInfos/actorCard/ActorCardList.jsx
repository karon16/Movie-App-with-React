import ActorCard from "./ActorCard";
import styled from "styled-components";
import { useState, useEffect } from "react";

const StyledActorCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
`;

const ActorCardList = ({ urlSegment }) => {
  const [actors, setSActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const actorsList = actors.filter((actor) => actor.profile_path !== null).slice(0, 10);

  const apiUrl = "https://api.themoviedb.org/3";
  const personalKey = "api_key=ff3f7a6f9e9804bf8c152b62e26b928c";
  const actorsUrl = `${apiUrl}${urlSegment}/credits?${personalKey}&language=fr`;

  useEffect(() => {
    setIsLoading(true);
    fetch(actorsUrl)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setSActors(data.cast);
      });
  }, [actorsUrl]);

  return (
    <StyledActorCardList>
      {actorsList.map((actor, index) => {
        return (
          <ActorCard
            key={index}
            actorPicture={actor.profile_path}
            actorName={actor.name}
            actorRole={actor.character}
            isLoading={isLoading}
            popularity={actor.popularity}
          />
        );
      })}
    </StyledActorCardList>
  );
};

export default ActorCardList;
