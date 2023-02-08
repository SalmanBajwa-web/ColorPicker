import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";


function App() {
  // ############ state

  // ########### fuc

  // ############# effect

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
