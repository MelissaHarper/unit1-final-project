import "./App.css";
import { BrowseRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import OptionsContainer from "./components/FilterContainer";
import Home from "./components/Home";

function App() {
  return (
    <main>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      <body>
        <OptionsContainer />
      </body>
    </main>
  );
}

export default App;
