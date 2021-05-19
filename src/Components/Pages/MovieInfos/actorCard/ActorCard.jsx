import { LoadingSkeleton } from "../../../Shared/LoadingSkeleton/LoadingSkeleton";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";
import { StyledActorCard } from "./ActorCardStyle";

const ActorCard = ({ actorPicture, actorName, actorRole, isLoading, popularity }) => {
  if (isLoading) {
    return (
      <StyledActorCard>
        <LoadingSkeleton />
      </StyledActorCard>
    );
  }

  return (
    <StyledActorCard>
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${actorPicture}`} alt="" className="actor-image" />
      </div>
      <h4 className="actor-name">{actorName}</h4>
      <p>
        <span className="actor-role">Rôle de {actorRole}</span>
        <br></br>
        <Icon name="star" inverted className="actor-star-icon" />
        <span className="actor-popularity">{popularity}</span>
      </p>
    </StyledActorCard>
  );
};

export default ActorCard;
