import Home from "./Components/Pages/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Movies from "./Components/Pages/Movies/Movies";
import Series from "./Components/Pages/Series/Series";
import MovieInfos from "./Components/Pages/MovieInfos/MovieInfos";
import WelcomePage from "./Components/Pages/WelcomePage/WelcomePage";
import { MovieGenresProvider, TvGenresProvider } from "./Components/Contexts/NavigationGenreContext";
import { ActionMovieProvider } from "./Components/Contexts/RenderMovieContext";
import { AnimationMovieProvier } from "./Components/Contexts/AnimationMovieContext";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/accueil" component={Home} />
        <MovieGenresProvider>
          <AnimationMovieProvier>
            <ActionMovieProvider>
              <Route path="/films/:id" component={Movies} />
            </ActionMovieProvider>
          </AnimationMovieProvier>
          <TvGenresProvider>
            <Route path="/series/:id" component={Series} />
          </TvGenresProvider>
          <Route path="/movie/:id" render={({ match }) => <MovieInfos match={match} />} />
          <Route path="/tv/:id" render={({ match }) => <MovieInfos match={match} />} />
        </MovieGenresProvider>
      </Switch>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
