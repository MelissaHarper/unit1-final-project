import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FilterContainer from "./components/FilterContainer";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Selection from "./components/Selection";
import Recommendations from "./components/Recommendations";
import data from "./assets/data/mergedDummyData.json";
import "./App.css";

function App() {
  // State variable for selectedMovie
  const [selectedMovie, setSelectedMovie] = useState(
    data.map((obj) => {
      return { ...obj };
    })
  );

  return (
    <main>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/filterContainer" element={<FilterContainer />} />
            <Route
              path="/selection"
              element={
                <Selection
                  selectedMovie={selectedMovie}
                  setSelectedMovie={setSelectedMovie}
                />
              }
            />
            <Route
              path="/footer"
              element={
                <Footer
                  selection={selectedMovie}
                  setSelectedMovie={setSelectedMovie}
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      <></>
    </main>
  );
}

export default App;
