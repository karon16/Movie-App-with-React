import "semantic-ui-css/semantic.min.css";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { StyledIcon, SearchBar } from "./SearchInputStyle";

const SearchInput = ({ onChange }) => {
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    return setIsVisible(!isVisible);
  };

  const linkToSearchPage = () => {
    history.push("/recherche");
  };

  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname !== "/recherche") {
        return setIsVisible(false);
      }
    });
  }, [history]);

  return (
    <>
      <SearchBar
        type="search"
        name="search"
        onChange={onChange}
        onClick={linkToSearchPage}
        className={isVisible ? "visible-search-bar" : null}
        placeholder="Recherche..."
      />
      <StyledIcon name="search" inverted onClick={handleClick} />
    </>
  );
};

export default SearchInput;
