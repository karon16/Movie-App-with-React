import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Input, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const SearchBar = styled.input`
  background: none;
  outline: none;
  height: 25px;
  border-radius: 0px !important;
`;

const SearchInput = ({ onChange }) => {
  const history = useHistory();

  const linkToSearchPage = () => {
    history.push("/recherche");
  };
  return (
    <>
      <SearchBar as={Input} type="search" name="search" icon={<Icon name="search" />} onChange={onChange} onClick={linkToSearchPage} />
    </>
  );
};

export default SearchInput;
