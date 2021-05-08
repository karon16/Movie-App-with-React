import Home from "./Components/Pages/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Movies from "./Components/Pages/Movies/Movies";
import Series from "./Components/Pages/Series/Series";
import MovieInfos from "./Components/Pages/MovieInfos/MovieInfos";
import WelcomePage from "./Components/Pages/WelcomePage/WelcomePage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/accueil" component={Home} />
        <Route path="/films" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/movie/:id" render={({ match }) => <MovieInfos match={match} />} />
        <Route path="/tv/:id" render={({ match }) => <MovieInfos match={match} />} />
      </Switch>
      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
