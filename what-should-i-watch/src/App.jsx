import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FilterContainer from "./components/FilterContainer";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Selection from "./components/Selection";

function App() {
  return (
    <main>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/filterContainer" element={<FilterContainer />} />
            <Route path="/selection" element={<Selection />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      <></>
    </main>
  );
}

export default App;
