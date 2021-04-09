import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import Navi from "./components/Navi";
import Computers from "./views/Computers";
import Headphones from "./views/Headphones";
import Televisions from "./views/Televisions";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <h1>
        Welcome to Electronic Store
        <Navi />
      </h1>

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Computers" component={Computers} />
        <Route path="/Headphones" component={Headphones} />
        <Route path="/Televisions" component={Televisions} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
