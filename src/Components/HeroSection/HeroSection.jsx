import Button from "../Shared/Button/Button";
import styled from "styled-components";

const StyledHeroSection = styled.section``;

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <div>
        <h2>Movie Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          animi commodi veritatis nobis, doloribus illo atque unde id asperiores
          voluptatem cum optio eum obcaecati reprehenderit porro. Quos atque
          molestias mollitia!
        </p>
        <div>
          <Button cardbutton animateprimary>
            Bande d'annonce
          </Button>
          <Button buttonmargin="10px" secondary cardbutton animatesecondary>
            Plus d'Infos
          </Button>
        </div>
      </div>
    </StyledHeroSection>
  );
};

export default HeroSection;
