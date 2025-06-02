import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import NavBar from "./components/NavBar";
import FilterContainer from "./components/FilterContainer";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Selection from "./components/Selection";
import Recommendations from "./components/Recommendations";
import "./App.css";
import jtLoading from "./assets/images/jt-loading.gif";
import DateRangeFilter from "./components/DateRangeFilter";
import MovieCard from "./components/MovieCard";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={jtLoading} alt="John Travolta looking around confused" />
      </Box>
    );
  }
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
            <Route path="/dateFilter" element={<DateRangeFilter />} />
            <Route path="/movieCard" element={<MovieCard />} />
            <Route
              path="/selection/:type/detail/:id"
              element={
                <Selection
                // selectedMovie={selectedMovie}
                // setSelectedMovie={setSelectedMovie}
                />
              }
            />
            <Route
              path="/footer"
              element={
                <Footer
                // selection={selectedMovie}
                // setSelectedMovie={setSelectedMovie}
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
