import styled from "styled-components";

export const StyledMediaTrailer = styled.div`
  width: 100%;
  position: relative;
  display: none;
  margin-top: 50px;

  .trailer {
    width: 100%;
    height: 500px;
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-1024"]} {
    .trailer {
      height: 500px;
    }
  }
  @media ${({ theme }) => theme.mediaQueries["bellow-768"]} {
    .trailer {
      height: 370px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-420"]} {
    .trailer {
      height: 300px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-320"]} {
    .trailer {
      height: 250px;
    }
  }

  @media ${({ theme }) => theme.mediaQueries["bellow-900"]} {
    display: block;
  }
`;
