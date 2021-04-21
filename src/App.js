import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import Navi from "./components/Navi";
import Computers from "./views/Computers";
import Headphones from "./views/Headphones";
import Televisions from "./views/Televisions";
import SignUp from "./views/SignUp";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <h1>
        Welcome to Electronic Store
        <Navi />
      </h1>

      <Switch>
        <Route exact path="/" component={Homepage}>
          <Homepage />
        </Route>
        <Route path="/SignUp" component={SignUp}>
          <SignUp />
        </Route>
        <Route path="/Computers" component={Computers}>
          <Computers />
        </Route>
        <Route path="/Headphones" component={Headphones}>
          <Headphones />
        </Route>
        <Route path="/Televisions" component={Televisions}>
          <Televisions />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
