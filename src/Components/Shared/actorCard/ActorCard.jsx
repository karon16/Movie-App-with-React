import styled from "styled-components";

const StyledActorCard = styled.div`
  width: calc((10%) - 10px);
  /* width: 100px; */
  background: ${({ theme }) => theme.colors.darkBlue};

  .actor-image {
    width: 100%;
  }
  .actor-name {
    margin: 5px 0;
    color: white;
  }
`;

const ActorCard = ({ actorPicture, actorName }) => {
  return (
    <StyledActorCard>
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${actorPicture}`} alt="" className="actor-image" />
      </div>
      <h4 className="actor-name">{actorName}</h4>
    </StyledActorCard>
  );
};

export default ActorCard;
