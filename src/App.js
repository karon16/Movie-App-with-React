import Home from "./Components/Pages/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Movies from "./Components/Pages/Movies/Movies";
import Series from "./Components/Pages/Series/Series";
import MovieInfos from "./Components/Pages/MovieInfos/MovieInfos";
import WelcomePage from "./Components/Pages/WelcomePage/WelcomePage";
import { MovieGenresProvider, TvGenresProvider } from "./Components/Contexts/NavigationGenreContext";
import { useState, useEffects } from "react";
import Search from "./Components/Pages/Search/Search";
// import { ActionMovieProvider } from "./Components/Contexts/RenderMovieContext";
// import { AnimationMovieProvier } from "./Components/Contexts/AnimationMovieContext";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const location = useLocation();

  const getUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // console.log(userInput);

  return (
    <>
      {location.pathname !== "/" && <Header onChange={getUserInput} />}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/accueil" component={Home} />
        <MovieGenresProvider>
          <Route path="/films/:id" component={Movies} />
          <TvGenresProvider>
            <Route path="/series/:id" component={Series} />
          </TvGenresProvider>
          <Route path="/movie/:id" render={({ match }) => <MovieInfos match={match} />} />
          <Route path="/tv/:id" render={({ match }) => <MovieInfos match={match} />} />
        </MovieGenresProvider>
      </Switch>
      <Route path="/recherche" render={({ userQuery }) => <Search userQuery={userInput} />} />
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

export default App;
