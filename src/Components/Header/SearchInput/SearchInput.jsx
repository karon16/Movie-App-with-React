import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";
import { Input, Icon } from "semantic-ui-react";

const SearchBar = styled.input`
  background: none;
  outline: none;
  height: 25px;
  border-radius: 0px !important;
`;

const SearchInput = ({ value }) => {
  return (
    <>
      <SearchBar
        as={Input}
        type="search"
        value={value}
        name="search"
        icon={<Icon name="search" />}
      />
    </>
  );
};

export default SearchInput;
