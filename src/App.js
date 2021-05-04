import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Home from "./Components/Home/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/accueil" component={Home} />
      </Switch>
    </>
  );
}

export default App;
