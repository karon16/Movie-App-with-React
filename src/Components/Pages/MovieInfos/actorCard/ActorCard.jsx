import styled from "styled-components";
import { LoadingSkeleton } from "../../../Shared/LoadingSkeleton/LoadingSkeleton";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

const StyledActorCard = styled.div`
  width: calc((10%) - 10px);
  background: ${({ theme }) => theme.colors.darkBlue};
  display: inline-block;
  margin: 10px 0;
  color: white;
  .actor-image {
    width: 100%;
  }
  .actor-name {
    margin: 5px 0;
  }
  .actor-role {
    color: ${({ theme }) => theme.colors.paleWhite};
  }
  .actor-popularity,
  .actor-star-icon {
    color: ${({ theme }) => theme.colors.paleWhite};
    font-size: 0.85rem;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    width: calc((15%) - 15px);
    margin: 10px 0;
    .actor-name {
      margin: 5px 0;
    }
    .actor-popularity,
    .actor-star-icon {
      color: ${({ theme }) => theme.colors.paleWhite};
      font-size: 0.75rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    width: calc((18%) - 20px);
    .actor-name {
      margin: 5px 0;
      font-size: 1.1rem;
    }
    .actor-popularity,
    .actor-star-icon {
      color: ${({ theme }) => theme.colors.paleWhite};
      font-size: 0.65rem;
    }
    .actor-role {
      font-size: 0.8rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-600"]} {
    width: calc((23%) - 30px);
    .actor-name {
      margin: 5px 0;
      font-size: 0.95rem;
    }
    .actor-popularity,
    .actor-star-icon {
      color: ${({ theme }) => theme.colors.paleWhite};
      font-size: 0.55rem;
    }
    .actor-role {
      font-size: 0.65rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    width: calc((24%) - 10px);
    .actor-name {
      margin: 5px 0;
      font-size: 0.9rem;
    }
    .actor-popularity,
    .actor-star-icon {
      color: ${({ theme }) => theme.colors.paleWhite};
      font-size: 0.5rem;
    }
    .actor-role {
      font-size: 0.6rem;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    width: calc((25%) - 10px);
    .actor-name {
      margin: 5px 0;
      font-size: 0.8rem;
    }
    .actor-popularity,
    .actor-star-icon {
      color: ${({ theme }) => theme.colors.paleWhite};
      font-size: 0.4rem;
    }
    .actor-role {
      font-size: 0.5rem;
    }
  }
`;

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
