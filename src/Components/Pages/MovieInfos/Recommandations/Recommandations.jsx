import { useState, useEffect, useReducer } from "react";
import Button from "../../../Shared/Button/Button";
import MinimalCardList from "../../../Shared/MinimalCardComponent/MinimalCardList";
import SectionDivider from "../../../Shared/SectionDivider/SectionDivider";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { ButtonWrapper } from "./RecommandationsStyle";

const initialState = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 5;
    case "decrement":
      return state - 5;
    case "reinit":
      return initialState;
    default:
      return initialState;
  }
};

const Recommandations = ({ apiUrl, urlSegment, personalKey, type }) => {
  const [visibleMedia, visibleMediaDispatch] = useReducer(reducer, initialState);
  const [recommandationsMovies, setRecommandationsMovies] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const recommandationsUrl = `${apiUrl}${urlSegment}/recommendations?api_key=${personalKey}&language=fr&page=1`;

  const getRecommandations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(recommandationsUrl);
      const data = await response.json();
      setIsLoading(false);
      setRecommandationsMovies(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getRecommandations();
    visibleMediaDispatch("reinit");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recommandationsUrl]);

  return (
    <div>
      <SectionDivider />
      <SectionTitle>Recommandations</SectionTitle>
      <MinimalCardList
        mediaList={recommandationsMovies !== undefined ? recommandationsMovies.slice(0, visibleMedia) : []}
        defined_media_type={type === "movie" ? "movie" : "tv"}
        minHeight="400"
        isLoading={isLoading}
      />
      <ButtonWrapper>
        {visibleMedia > 5 && (
          <Button animatesecondary secondary onClick={() => visibleMediaDispatch("decrement")}>
            Voir Moins
          </Button>
        )}
        {visibleMedia >= 20 || (
          <Button animateprimary buttonmargin="10px" onClick={() => visibleMediaDispatch("increment")}>
            Voir Plus
          </Button>
        )}
      </ButtonWrapper>
    </div>
  );
};

export default Recommandations;
