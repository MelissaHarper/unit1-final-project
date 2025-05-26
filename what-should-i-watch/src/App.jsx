import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./assets/data/mergedDummyData.json";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;

// //   // State variable for selectedMovie
// //   const [selectedMovie, setSelectedMovie] = useState(
// //     data.map((obj) => {
// //       return { ...obj };
// //     })
// //   );

// // App.js

// import React from "react";
// import { Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   return (
//     <Container className="d-flex justify-content-around align-items-center flex-wrap my-5">
//       <div className="bg-success text-white p-3 m-2">Element 1</div>
//       <div className="bg-warning text-dark p-3 m-2">Element 2</div>
//       <div className="bg-danger text-white p-3 m-2">Element 3</div>
//       <div className="bg-info text-white p-3 m-2">Element 4</div>
//     </Container>
//   );
// }

// export default App;

// // App.js

// import React from "react";
// import { Container, Card, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   return (
//     <Container className="text-center my-5">
//       <Card bg="info" text="white">
//         <Card.Body>
//           <Card.Title>Welcome to our Website</Card.Title>
//           <Card.Text>
//             Discover the beauty of React Bootstrap Layout with a stunning
//             container component approach.
//           </Card.Text>
//           <Button variant="light">Learn More</Button>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default App;

// // App.js

// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   return (
//     <Container className="text-center my-5">
//       <Row>
//         <Col md={6} className="bg-primary text-white p-4">
//           <h2>Column 1</h2>
//           <p>
//             This is a visually appealing layout using the grid system approach.
//           </p>
//           <Button variant="light">Click me</Button>
//         </Col>
//         <Col md={6} className="bg-secondary text-white p-4">
//           <h2>Column 2</h2>
//           <p>Responsive and stunning design to enhance user experience.</p>
//           <Button variant="light">Explore</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;

// //App.js

// import "./App.css";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { Post } from "./components/Post";

// function App() {
//   return (
//     <div className="App">
//       <Container fluid>
//         <Container>
//           <Row>
//             {Post.map((v, i) => {
//               return <Cardd pitems={v} key={i} />;
//             })}
//           </Row>
//         </Container>
//       </Container>
//     </div>
//   );
// }

// export default App;

// function Cardd({ pitems }) {
//   if (!pitems) {
//     return null;
//   }
//   return (
//     <div className="col-sm-3 my-3">
//       <Col>
//         <Card style={{ width: "18rem", height: "15rem" }}>
//           <Card.Body>
//             <Card.Title>{pitems.name}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//               {pitems.email}
//             </Card.Subtitle>
//             <Card.Text>{pitems.body}</Card.Text>
//             <Card.Link>{pitems.Product}</Card.Link>
//           </Card.Body>
//         </Card>
//       </Col>
//     </div>
//   );
// }

// // import { useState } from "react";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import NavBar from "./components/NavBar";
// // import FilterContainer from "./components/FilterContainer";
// // import Home from "./components/Home";
// // import About from "./components/About";
// // import Footer from "./components/Footer";
// // import Selection from "./components/Selection";
// // import Recommendations from "./components/Recommendations";
// // import data from "./assets/data/mergedDummyData.json";
// // import "./App.css";

// // function App() {
// //   // State variable for selectedMovie
// //   const [selectedMovie, setSelectedMovie] = useState(
// //     data.map((obj) => {
// //       return { ...obj };
// //     })
// //   );

// //   return (
// //     <main>
// //       <div className="App">
// //         <BrowserRouter>
// //           <NavBar />
// //           <Routes>
// //             <Route index element={<Home />} />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/recommendations" element={<Recommendations />} />
// //             <Route path="/filterContainer" element={<FilterContainer />} />
// //             <Route
// //               path="/selection"
// //               element={
// //                 <Selection
// //                   selectedMovie={selectedMovie}
// //                   setSelectedMovie={setSelectedMovie}
// //                 />
// //               }
// //             />
// //             <Route
// //               path="/footer"
// //               element={
// //                 <Footer
// //                   selection={selectedMovie}
// //                   setSelectedMovie={setSelectedMovie}
// //                 />
// //               }
// //             />
// //           </Routes>
// //           <Footer />
// //         </BrowserRouter>
// //       </div>
// //       <></>
// //     </main>
// //   );
// // }

// // export default App;
