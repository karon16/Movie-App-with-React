import { useEffect, useState } from "react";
import MinimalCardList from "../../Shared/MinimalCardComponent/MinimalCardList";
import Button from "../../Shared/Button/Button";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { ButtonWrapper, SearchWrapper, PaginationWrapper } from "./SearchStyle";
import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

const Search = ({ userQuery }) => {
  const [mediaType, setMediaType] = useState("movie");
  const [searhedMovies, setSearhedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(false);
  const [totalResults, setTotalResults] = useState("");
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const url = `https://api.themoviedb.org/3/search/${mediaType}?api_key=ff3f7a6f9e9804bf8c152b62e26b928c&language=fr&query=${userQuery}&page=${currentPage}&include_adult=false `;

  const fetchMovies = () => {
    setMediaType("movie");
    setActive(false);
  };

  const fetchSeries = () => {
    setMediaType("tv");
    setActive(true);
  };

  const inrementPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const decrementPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getSearchedMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTotalResults(data.total_results);
      setTotalPages(data.total_pages);
      setIsLoading(false);
      setSearhedMovies(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getSearchedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    setCurrentPage(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userQuery, mediaType]);

  return (
    <SearchWrapper className="section-padding">
      <>
        <ButtonWrapper>
          <Button animatesecondary secondary onClick={fetchMovies} className={active ? "" : "active-search-button "}>
            Film
          </Button>
          <Button animatesecondary secondary buttonmargin="10px" onClick={fetchSeries} className={active ? "active-search-button " : ""}>
            Series
          </Button>
        </ButtonWrapper>
        <SectionTitle>
          {totalResults} Resultats pour : {userQuery}
          <p>
            Pages {currentPage} sur {totalPages} Trouvées
          </p>
        </SectionTitle>
        <MinimalCardList
          mediaList={searhedMovies === undefined || searhedMovies.length === 0 ? [] : searhedMovies}
          defined_media_type={mediaType === "movie" ? "movie" : "tv"}
          isLoading={isLoading}
          minHeight="400px"
        />

        <PaginationWrapper>
          <Button animatesecondary secondary buttonmargin="10px" onClick={decrementPage}>
            -
          </Button>
          <Button animateprimary buttonmargin="10px">
            {currentPage}
          </Button>
          <Button animatesecondary secondary buttonmargin="10px" onClick={inrementPage}>
            +
          </Button>
        </PaginationWrapper>
      </>
    </SearchWrapper>
  );
};

export default Search;
