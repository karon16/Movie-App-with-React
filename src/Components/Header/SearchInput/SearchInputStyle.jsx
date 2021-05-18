import styled from "styled-components";
import { Icon } from "semantic-ui-react";

export const SearchBar = styled.input`
  background: none;
  outline: none;
  border: 1px solid white;
  height: 25px;
  border-radius: 0px !important;
  width: 0%;
  transition: all 1s ease;
  opacity: 0;
  color: rgba(255, 255, 255, 1);
  padding: 0px 10px;
  font-size: 0.95rem;

  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    height: 20px;
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: 1rem !important;
  line-height: 1rem !important;
  margin: 0px !important;
  margin-left: 10px !important;
  font-weight: 100 !important;

  @media ${({ theme }) => theme.mediaQueries["bellow-1000"]} {
    margin-right: 10px !important;
  }
`;
