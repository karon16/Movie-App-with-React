import ExplicitCard from "../ExplicitCard/ExplicitCard";
import styled from "styled-components";

const StyledExplicitCard = styled.div`
  /* padding: ${({ theme }) => theme.sizes.defaultPaddingTop}
    ${({ theme }) => theme.sizes.defaultPaddingSides}; */
  display: flex;
  justify-content: space-between;
`;

const ExplicitCardList = () => {
  return (
    <StyledExplicitCard>
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
      <ExplicitCard />
    </StyledExplicitCard>
  );
};

export default ExplicitCardList;
