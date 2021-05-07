import styled from "styled-components";

const StyledActorCard = styled.div`
  width: 10%;

  .actor-image {
    width: 100%;
  }
  .actor-name {
    margin: 5px 0;
    color: white;
  }
`;

const ActorCard = () => {
  return (
    <StyledActorCard>
      <div>
        <img
          src="https://image.tmdb.org/t/p/original/oTB9vGIBacH5aQNS0pUM74QSWuf.jpg"
          alt=""
          className="actor-image"
        />
      </div>
      <h4 className="actor-name">Actor Name</h4>
    </StyledActorCard>
  );
};

export default ActorCard;
