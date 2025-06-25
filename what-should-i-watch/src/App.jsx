import { useState, UseState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Selection from "./components/Selection";
import Recommendations from "./components/Recommendations";
import Feedback from "./components/Feedback";
import "./App.css";
import MovieCard from "./components/MovieCard";
import movies from "./assets/data/movies.json";

function App() {
  const [movieList, setMovieList] = useState(movies);
  return (
    <main>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/recommendations"
              element={
                <Recommendations
                  movieList={movieList}
                  setMovieList={setMovieList}
                />
              }
            />
            <Route path="/dateFilter" element={<DateRangeFilter />} />
            <Route
              path="/movieCard"
              element={
                <MovieCard movieList={movieList} setMovieList={setMovieList} />
              }
            />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/selection/:type/detail/:id" element={<Selection />} />
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
