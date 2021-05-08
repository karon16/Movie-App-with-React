import Home from "./Components/Pages/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Movies from "./Components/Pages/Movies/Movies";
import Series from "./Components/Pages/Series/Series";
import MovieInfos from "./Components/Pages/MovieInfos/MovieInfos";
import WelcomePage from "./Components/Pages/WelcomePage/WelcomePage";
import { MovieGenresProvider, TvGenresProvider } from "./Components/Contexts/NavigationGenreContext";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/accueil" component={Home} />
        <MovieGenresProvider>
          <Route path="/films" component={Movies} />
        </MovieGenresProvider>
        <TvGenresProvider>
          <Route path="/series" component={Series} />
        </TvGenresProvider>

        <Route path="/movie/:id" render={({ match }) => <MovieInfos match={match} />} />
        <Route path="/tv/:id" render={({ match }) => <MovieInfos match={match} />} />
      </Switch>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
