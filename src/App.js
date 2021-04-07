import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Navi from "./components/Navi";

function App() {
  return (
    <div className="App">
      <Navi />

      <Route path="/Homepage" component={Homepage} />
    </div>
  );
}

export default App;
