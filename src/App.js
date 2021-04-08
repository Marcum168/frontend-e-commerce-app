import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage";
import Navi from "./Components/Navi";
import Computers from "./views/Computers";
import Headphones from "./views/Headphones";
import Televisions from "./views/Televisions";
function App() {
  return (
    <div className="App">
      <h1>Welcome to Electronic Store</h1>
      <Navi />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Computers" component={Computers} />
        <Route path="/Headphones" component={Headphones} />
        <Route path="/Televisions" component={Televisions} />
      </Switch>
    </div>
  );
}

export default App;
