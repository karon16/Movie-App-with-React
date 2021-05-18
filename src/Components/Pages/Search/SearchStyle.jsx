import styled from "styled-components";

export const SearchWrapper = styled.div`
  background: rgb(14, 25, 48);
  width: 100vw;
  padding-top: 5% !important;

  @media ${({ theme }) => theme.mediaQueries["bellow-1280"]} {
    padding-top: 7% !important;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    padding-top: 8% !important;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    padding-top: 9% !important;
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    padding-top: 12% !important;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    padding-top: 14% !important;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 0px auto;

  .active-search-button {
    color: white !important;
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px auto;
`;
