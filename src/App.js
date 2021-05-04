import WelcomePage from "./Components/WelcomePage/WelcomePage";
import Home from "./Components/Home/Home";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/accueil" component={Home} />
    </Switch>
  );
}

export default App;
