import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import OptionsContainer from "./components/FilterContainer";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact component={<Home />}></Route>
          </Routes>
        </Router>
      </div>
      <OptionsContainer />
      <></>
      <Footer />
    </main>
  );
}

export default App;
